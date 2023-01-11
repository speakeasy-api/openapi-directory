import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lunrange as shared_lunrange
from ..shared import nfsexport as shared_nfsexport

class VolumeConfigPerformanceTierEnum(str, Enum):
    VOLUME_PERFORMANCE_TIER_UNSPECIFIED = "VOLUME_PERFORMANCE_TIER_UNSPECIFIED"
    VOLUME_PERFORMANCE_TIER_SHARED = "VOLUME_PERFORMANCE_TIER_SHARED"
    VOLUME_PERFORMANCE_TIER_ASSIGNED = "VOLUME_PERFORMANCE_TIER_ASSIGNED"
    VOLUME_PERFORMANCE_TIER_HT = "VOLUME_PERFORMANCE_TIER_HT"

class VolumeConfigProtocolEnum(str, Enum):
    PROTOCOL_UNSPECIFIED = "PROTOCOL_UNSPECIFIED"
    PROTOCOL_FC = "PROTOCOL_FC"
    PROTOCOL_NFS = "PROTOCOL_NFS"

class VolumeConfigTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    FLASH = "FLASH"
    DISK = "DISK"


@dataclass_json
@dataclasses.dataclass
class VolumeConfigInput:
    r"""VolumeConfigInput
    Configuration parameters for a new volume.
    """
    
    gcp_service: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcpService') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    lun_ranges: Optional[list[shared_lunrange.LunRange]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lunRanges') }})
    machine_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineIds') }})
    nfs_exports: Optional[list[shared_nfsexport.NfsExport]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nfsExports') }})
    performance_tier: Optional[VolumeConfigPerformanceTierEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('performanceTier') }})
    protocol: Optional[VolumeConfigProtocolEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    size_gb: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizeGb') }})
    snapshots_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snapshotsEnabled') }})
    type: Optional[VolumeConfigTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    user_note: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userNote') }})
    

@dataclass_json
@dataclasses.dataclass
class VolumeConfig:
    r"""VolumeConfig
    Configuration parameters for a new volume.
    """
    
    gcp_service: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcpService') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    lun_ranges: Optional[list[shared_lunrange.LunRange]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lunRanges') }})
    machine_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineIds') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    nfs_exports: Optional[list[shared_nfsexport.NfsExport]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nfsExports') }})
    performance_tier: Optional[VolumeConfigPerformanceTierEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('performanceTier') }})
    protocol: Optional[VolumeConfigProtocolEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    size_gb: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizeGb') }})
    snapshots_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snapshotsEnabled') }})
    type: Optional[VolumeConfigTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    user_note: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userNote') }})
    
