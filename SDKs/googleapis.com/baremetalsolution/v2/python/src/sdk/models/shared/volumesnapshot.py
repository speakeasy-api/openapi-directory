import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class VolumeSnapshotTypeEnum(str, Enum):
    SNAPSHOT_TYPE_UNSPECIFIED = "SNAPSHOT_TYPE_UNSPECIFIED"
    AD_HOC = "AD_HOC"
    SCHEDULED = "SCHEDULED"


@dataclass_json
@dataclasses.dataclass
class VolumeSnapshot:
    r"""VolumeSnapshot
    A snapshot of a volume. Only boot volumes can have snapshots.
    """
    
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    storage_volume: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storageVolume') }})
    type: Optional[VolumeSnapshotTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class VolumeSnapshotInput:
    r"""VolumeSnapshotInput
    A snapshot of a volume. Only boot volumes can have snapshots.
    """
    
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
