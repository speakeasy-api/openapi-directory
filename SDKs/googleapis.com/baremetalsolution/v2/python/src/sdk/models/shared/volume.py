import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import snapshotreservationdetail as shared_snapshotreservationdetail

class VolumePerformanceTierEnum(str, Enum):
    VOLUME_PERFORMANCE_TIER_UNSPECIFIED = "VOLUME_PERFORMANCE_TIER_UNSPECIFIED"
    VOLUME_PERFORMANCE_TIER_SHARED = "VOLUME_PERFORMANCE_TIER_SHARED"
    VOLUME_PERFORMANCE_TIER_ASSIGNED = "VOLUME_PERFORMANCE_TIER_ASSIGNED"
    VOLUME_PERFORMANCE_TIER_HT = "VOLUME_PERFORMANCE_TIER_HT"

class VolumeSnapshotAutoDeleteBehaviorEnum(str, Enum):
    SNAPSHOT_AUTO_DELETE_BEHAVIOR_UNSPECIFIED = "SNAPSHOT_AUTO_DELETE_BEHAVIOR_UNSPECIFIED"
    DISABLED = "DISABLED"
    OLDEST_FIRST = "OLDEST_FIRST"
    NEWEST_FIRST = "NEWEST_FIRST"

class VolumeStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    READY = "READY"
    DELETING = "DELETING"
    UPDATING = "UPDATING"

class VolumeStorageTypeEnum(str, Enum):
    STORAGE_TYPE_UNSPECIFIED = "STORAGE_TYPE_UNSPECIFIED"
    SSD = "SSD"
    HDD = "HDD"

class VolumeWorkloadProfileEnum(str, Enum):
    WORKLOAD_PROFILE_UNSPECIFIED = "WORKLOAD_PROFILE_UNSPECIFIED"
    GENERIC = "GENERIC"
    HANA = "HANA"

class VolumeProtocolEnum(str, Enum):
    PROTOCOL_UNSPECIFIED = "PROTOCOL_UNSPECIFIED"
    FIBRE_CHANNEL = "FIBRE_CHANNEL"
    NFS = "NFS"


@dataclass_json
@dataclasses.dataclass
class VolumeInput:
    r"""VolumeInput
    A storage volume.
    """
    
    auto_grown_size_gib: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoGrownSizeGib') }})
    current_size_gib: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentSizeGib') }})
    emergency_size_gib: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emergencySizeGib') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    max_size_gib: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxSizeGib') }})
    notes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    originally_requested_size_gib: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originallyRequestedSizeGib') }})
    performance_tier: Optional[VolumePerformanceTierEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('performanceTier') }})
    pod: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pod') }})
    remaining_space_gib: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remainingSpaceGib') }})
    requested_size_gib: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedSizeGib') }})
    snapshot_auto_delete_behavior: Optional[VolumeSnapshotAutoDeleteBehaviorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snapshotAutoDeleteBehavior') }})
    snapshot_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snapshotEnabled') }})
    snapshot_reservation_detail: Optional[shared_snapshotreservationdetail.SnapshotReservationDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snapshotReservationDetail') }})
    snapshot_schedule_policy: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snapshotSchedulePolicy') }})
    state: Optional[VolumeStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    storage_type: Optional[VolumeStorageTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storageType') }})
    workload_profile: Optional[VolumeWorkloadProfileEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workloadProfile') }})
    

@dataclass_json
@dataclasses.dataclass
class Volume:
    r"""Volume
    A storage volume.
    """
    
    auto_grown_size_gib: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoGrownSizeGib') }})
    boot_volume: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bootVolume') }})
    current_size_gib: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentSizeGib') }})
    emergency_size_gib: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emergencySizeGib') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    max_size_gib: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxSizeGib') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    originally_requested_size_gib: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originallyRequestedSizeGib') }})
    performance_tier: Optional[VolumePerformanceTierEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('performanceTier') }})
    pod: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pod') }})
    protocol: Optional[VolumeProtocolEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    remaining_space_gib: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remainingSpaceGib') }})
    requested_size_gib: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedSizeGib') }})
    snapshot_auto_delete_behavior: Optional[VolumeSnapshotAutoDeleteBehaviorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snapshotAutoDeleteBehavior') }})
    snapshot_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snapshotEnabled') }})
    snapshot_reservation_detail: Optional[shared_snapshotreservationdetail.SnapshotReservationDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snapshotReservationDetail') }})
    snapshot_schedule_policy: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snapshotSchedulePolicy') }})
    state: Optional[VolumeStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    storage_type: Optional[VolumeStorageTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storageType') }})
    workload_profile: Optional[VolumeWorkloadProfileEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workloadProfile') }})
    
