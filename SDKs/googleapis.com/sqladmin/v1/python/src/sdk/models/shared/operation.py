import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import backupcontext as shared_backupcontext
from ..shared import operationerrors as shared_operationerrors
from ..shared import exportcontext as shared_exportcontext
from ..shared import importcontext as shared_importcontext

class OperationOperationTypeEnum(str, Enum):
    SQL_OPERATION_TYPE_UNSPECIFIED = "SQL_OPERATION_TYPE_UNSPECIFIED"
    IMPORT = "IMPORT"
    EXPORT = "EXPORT"
    CREATE = "CREATE"
    UPDATE = "UPDATE"
    DELETE = "DELETE"
    RESTART = "RESTART"
    BACKUP = "BACKUP"
    SNAPSHOT = "SNAPSHOT"
    BACKUP_VOLUME = "BACKUP_VOLUME"
    DELETE_VOLUME = "DELETE_VOLUME"
    RESTORE_VOLUME = "RESTORE_VOLUME"
    INJECT_USER = "INJECT_USER"
    CLONE = "CLONE"
    STOP_REPLICA = "STOP_REPLICA"
    START_REPLICA = "START_REPLICA"
    PROMOTE_REPLICA = "PROMOTE_REPLICA"
    CREATE_REPLICA = "CREATE_REPLICA"
    CREATE_USER = "CREATE_USER"
    DELETE_USER = "DELETE_USER"
    UPDATE_USER = "UPDATE_USER"
    CREATE_DATABASE = "CREATE_DATABASE"
    DELETE_DATABASE = "DELETE_DATABASE"
    UPDATE_DATABASE = "UPDATE_DATABASE"
    FAILOVER = "FAILOVER"
    DELETE_BACKUP = "DELETE_BACKUP"
    RECREATE_REPLICA = "RECREATE_REPLICA"
    TRUNCATE_LOG = "TRUNCATE_LOG"
    DEMOTE_MASTER = "DEMOTE_MASTER"
    MAINTENANCE = "MAINTENANCE"
    ENABLE_PRIVATE_IP = "ENABLE_PRIVATE_IP"
    DEFER_MAINTENANCE = "DEFER_MAINTENANCE"
    CREATE_CLONE = "CREATE_CLONE"
    RESCHEDULE_MAINTENANCE = "RESCHEDULE_MAINTENANCE"
    START_EXTERNAL_SYNC = "START_EXTERNAL_SYNC"
    LOG_CLEANUP = "LOG_CLEANUP"
    AUTO_RESTART = "AUTO_RESTART"

class OperationStatusEnum(str, Enum):
    SQL_OPERATION_STATUS_UNSPECIFIED = "SQL_OPERATION_STATUS_UNSPECIFIED"
    PENDING = "PENDING"
    RUNNING = "RUNNING"
    DONE = "DONE"


@dataclass_json
@dataclasses.dataclass
class Operation:
    r"""Operation
    An Operation resource. For successful operations that return an Operation resource, only the fields relevant to the operation are populated in the resource.
    """
    
    backup_context: Optional[shared_backupcontext.BackupContext] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backupContext') }})
    end_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    error: Optional[shared_operationerrors.OperationErrors] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    export_context: Optional[shared_exportcontext.ExportContext] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exportContext') }})
    import_context: Optional[shared_importcontext.ImportContext] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('importContext') }})
    insert_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insertTime') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    operation_type: Optional[OperationOperationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationType') }})
    self_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    start_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    status: Optional[OperationStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    target_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetId') }})
    target_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetLink') }})
    target_project: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetProject') }})
    user: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
