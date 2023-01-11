import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import namespacedname as shared_namespacedname

class VolumeBackupFormatEnum(str, Enum):
    VOLUME_BACKUP_FORMAT_UNSPECIFIED = "VOLUME_BACKUP_FORMAT_UNSPECIFIED"
    GCE_PERSISTENT_DISK = "GCE_PERSISTENT_DISK"

class VolumeBackupStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    SNAPSHOTTING = "SNAPSHOTTING"
    UPLOADING = "UPLOADING"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    DELETING = "DELETING"


@dataclass_json
@dataclasses.dataclass
class VolumeBackup:
    r"""VolumeBackup
    Represents the backup of a specific persistent volume as a component of a Backup - both the record of the operation and a pointer to the underlying storage-specific artifacts. Next id: 14
    """
    
    complete_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completeTime') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    disk_size_bytes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskSizeBytes') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    format: Optional[VolumeBackupFormatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    source_pvc: Optional[shared_namespacedname.NamespacedName] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourcePvc') }})
    state: Optional[VolumeBackupStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    state_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateMessage') }})
    storage_bytes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storageBytes') }})
    uid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    volume_backup_handle: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumeBackupHandle') }})
    
