import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import snapshotimage as shared_snapshotimage

class SnapshotTypeEnum(str, Enum):
    SNAPSHOT_TYPE_UNSPECIFIED = "SNAPSHOT_TYPE_UNSPECIFIED"
    SAVE_GAME = "SAVE_GAME"


@dataclass_json
@dataclasses.dataclass
class Snapshot:
    r"""Snapshot
    An snapshot object.
    """
    
    cover_image: Optional[shared_snapshotimage.SnapshotImage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coverImage') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    drive_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('driveId') }})
    duration_millis: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationMillis') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    last_modified_millis: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedMillis') }})
    progress_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('progressValue') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[SnapshotTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    unique_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uniqueName') }})
    
