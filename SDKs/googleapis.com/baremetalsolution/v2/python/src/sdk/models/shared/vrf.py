import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import qospolicy as shared_qospolicy
from ..shared import vlanattachment as shared_vlanattachment

class VrfStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    PROVISIONING = "PROVISIONING"
    PROVISIONED = "PROVISIONED"


@dataclass_json
@dataclasses.dataclass
class Vrf:
    r"""Vrf
    A network VRF.
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    qos_policy: Optional[shared_qospolicy.QosPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('qosPolicy') }})
    state: Optional[VrfStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    vlan_attachments: Optional[list[shared_vlanattachment.VlanAttachment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlanAttachments') }})
    
