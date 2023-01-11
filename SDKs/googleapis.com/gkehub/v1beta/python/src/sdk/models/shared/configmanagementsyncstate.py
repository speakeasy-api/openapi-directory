import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import configmanagementsyncerror as shared_configmanagementsyncerror

class ConfigManagementSyncStateCodeEnum(str, Enum):
    SYNC_CODE_UNSPECIFIED = "SYNC_CODE_UNSPECIFIED"
    SYNCED = "SYNCED"
    PENDING = "PENDING"
    ERROR = "ERROR"
    NOT_CONFIGURED = "NOT_CONFIGURED"
    NOT_INSTALLED = "NOT_INSTALLED"
    UNAUTHORIZED = "UNAUTHORIZED"
    UNREACHABLE = "UNREACHABLE"


@dataclass_json
@dataclasses.dataclass
class ConfigManagementSyncState:
    r"""ConfigManagementSyncState
    State indicating an ACM's progress syncing configurations to a cluster
    """
    
    code: Optional[ConfigManagementSyncStateCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    errors: Optional[list[shared_configmanagementsyncerror.ConfigManagementSyncError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    import_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('importToken') }})
    last_sync: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastSync') }})
    last_sync_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastSyncTime') }})
    source_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceToken') }})
    sync_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('syncToken') }})
    
