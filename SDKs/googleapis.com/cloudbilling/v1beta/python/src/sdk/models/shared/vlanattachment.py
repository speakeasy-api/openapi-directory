import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import usage as shared_usage

class VlanAttachmentBandwidthEnum(str, Enum):
    BANDWIDTH_UNSPECIFIED = "BANDWIDTH_UNSPECIFIED"
    BANDWIDTH_BPS_50_M = "BANDWIDTH_BPS_50M"
    BANDWIDTH_BPS_100_M = "BANDWIDTH_BPS_100M"
    BANDWIDTH_BPS_200_M = "BANDWIDTH_BPS_200M"
    BANDWIDTH_BPS_300_M = "BANDWIDTH_BPS_300M"
    BANDWIDTH_BPS_400_M = "BANDWIDTH_BPS_400M"
    BANDWIDTH_BPS_500_M = "BANDWIDTH_BPS_500M"
    BANDWIDTH_BPS_1_G = "BANDWIDTH_BPS_1G"
    BANDWIDTH_BPS_2_G = "BANDWIDTH_BPS_2G"
    BANDWIDTH_BPS_5_G = "BANDWIDTH_BPS_5G"
    BANDWIDTH_BPS_10_G = "BANDWIDTH_BPS_10G"
    BANDWIDTH_BPS_20_G = "BANDWIDTH_BPS_20G"
    BANDWIDTH_BPS_50_G = "BANDWIDTH_BPS_50G"


@dataclass_json
@dataclasses.dataclass
class VlanAttachment:
    r"""VlanAttachment
    VLAN attachment for cloud interconnect.
    """
    
    bandwidth: Optional[VlanAttachmentBandwidthEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandwidth') }})
    vlan_count: Optional[shared_usage.Usage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlanCount') }})
    
