import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import diskencryptionconfiguration as shared_diskencryptionconfiguration
from ..shared import diskencryptionstatus as shared_diskencryptionstatus
from ..shared import operationerror as shared_operationerror

class BackupRunBackupKindEnum(str, Enum):
    SQL_BACKUP_KIND_UNSPECIFIED = "SQL_BACKUP_KIND_UNSPECIFIED"
    SNAPSHOT = "SNAPSHOT"
    PHYSICAL = "PHYSICAL"

class BackupRunStatusEnum(str, Enum):
    SQL_BACKUP_RUN_STATUS_UNSPECIFIED = "SQL_BACKUP_RUN_STATUS_UNSPECIFIED"
    ENQUEUED = "ENQUEUED"
    OVERDUE = "OVERDUE"
    RUNNING = "RUNNING"
    FAILED = "FAILED"
    SUCCESSFUL = "SUCCESSFUL"
    SKIPPED = "SKIPPED"
    DELETION_PENDING = "DELETION_PENDING"
    DELETION_FAILED = "DELETION_FAILED"
    DELETED = "DELETED"

class BackupRunTypeEnum(str, Enum):
    SQL_BACKUP_RUN_TYPE_UNSPECIFIED = "SQL_BACKUP_RUN_TYPE_UNSPECIFIED"
    AUTOMATED = "AUTOMATED"
    ON_DEMAND = "ON_DEMAND"


@dataclass_json
@dataclasses.dataclass
class BackupRun:
    r"""BackupRun
    A BackupRun resource.
    """
    
    backup_kind: Optional[BackupRunBackupKindEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backupKind') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disk_encryption_configuration: Optional[shared_diskencryptionconfiguration.DiskEncryptionConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskEncryptionConfiguration') }})
    disk_encryption_status: Optional[shared_diskencryptionstatus.DiskEncryptionStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskEncryptionStatus') }})
    end_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    enqueued_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enqueuedTime') }})
    error: Optional[shared_operationerror.OperationError] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    instance: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    location: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    self_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    start_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    status: Optional[BackupRunStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    time_zone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeZone') }})
    type: Optional[BackupRunTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    window_start_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('windowStartTime') }})
    
