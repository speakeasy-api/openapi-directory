import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import vlanattachment as shared_vlanattachment
from ..shared import usage as shared_usage

class CloudInterconnectWorkloadInterconnectTypeEnum(str, Enum):
    INTERCONNECT_TYPE_UNSPECIFIED = "INTERCONNECT_TYPE_UNSPECIFIED"
    INTERCONNECT_TYPE_DEDICATED = "INTERCONNECT_TYPE_DEDICATED"
    INTERCONNECT_TYPE_PARTNER = "INTERCONNECT_TYPE_PARTNER"

class CloudInterconnectWorkloadLinkTypeEnum(str, Enum):
    LINK_TYPE_UNSPECIFIED = "LINK_TYPE_UNSPECIFIED"
    LINK_TYPE_ETHERNET_10_G_LR = "LINK_TYPE_ETHERNET_10G_LR"
    LINK_TYPE_ETHERNET_100_G_LR = "LINK_TYPE_ETHERNET_100G_LR"


@dataclass_json
@dataclasses.dataclass
class CloudInterconnectWorkload:
    r"""CloudInterconnectWorkload
    Specifies usage for Cloud Interconnect resources.
    """
    
    interconnect_attachments: Optional[list[shared_vlanattachment.VlanAttachment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interconnectAttachments') }})
    interconnect_type: Optional[CloudInterconnectWorkloadInterconnectTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interconnectType') }})
    link_type: Optional[CloudInterconnectWorkloadLinkTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkType') }})
    provisioned_link_count: Optional[shared_usage.Usage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provisionedLinkCount') }})
    
