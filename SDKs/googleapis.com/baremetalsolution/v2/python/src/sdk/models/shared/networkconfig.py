import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import intakevlanattachment as shared_intakevlanattachment

class NetworkConfigBandwidthEnum(str, Enum):
    BANDWIDTH_UNSPECIFIED = "BANDWIDTH_UNSPECIFIED"
    BW_1_GBPS = "BW_1_GBPS"
    BW_2_GBPS = "BW_2_GBPS"
    BW_5_GBPS = "BW_5_GBPS"
    BW_10_GBPS = "BW_10_GBPS"

class NetworkConfigServiceCidrEnum(str, Enum):
    SERVICE_CIDR_UNSPECIFIED = "SERVICE_CIDR_UNSPECIFIED"
    DISABLED = "DISABLED"
    HIGH_26 = "HIGH_26"
    HIGH_27 = "HIGH_27"
    HIGH_28 = "HIGH_28"

class NetworkConfigTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    CLIENT = "CLIENT"
    PRIVATE = "PRIVATE"


@dataclass_json
@dataclasses.dataclass
class NetworkConfigInput:
    r"""NetworkConfigInput
    Configuration parameters for a new network.
    """
    
    bandwidth: Optional[NetworkConfigBandwidthEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandwidth') }})
    cidr: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cidr') }})
    gcp_service: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcpService') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    jumbo_frames_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jumboFramesEnabled') }})
    service_cidr: Optional[NetworkConfigServiceCidrEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceCidr') }})
    type: Optional[NetworkConfigTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    user_note: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userNote') }})
    vlan_attachments: Optional[list[shared_intakevlanattachment.IntakeVlanAttachment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlanAttachments') }})
    vlan_same_project: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlanSameProject') }})
    

@dataclass_json
@dataclasses.dataclass
class NetworkConfig:
    r"""NetworkConfig
    Configuration parameters for a new network.
    """
    
    bandwidth: Optional[NetworkConfigBandwidthEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandwidth') }})
    cidr: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cidr') }})
    gcp_service: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcpService') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    jumbo_frames_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jumboFramesEnabled') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    service_cidr: Optional[NetworkConfigServiceCidrEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceCidr') }})
    type: Optional[NetworkConfigTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    user_note: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userNote') }})
    vlan_attachments: Optional[list[shared_intakevlanattachment.IntakeVlanAttachment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlanAttachments') }})
    vlan_same_project: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlanSameProject') }})
    
