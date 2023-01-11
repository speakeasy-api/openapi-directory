import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mysqlsyncconfig as shared_mysqlsyncconfig

class SQLInstancesVerifyExternalSyncSettingsRequestSyncModeEnum(str, Enum):
    EXTERNAL_SYNC_MODE_UNSPECIFIED = "EXTERNAL_SYNC_MODE_UNSPECIFIED"
    ONLINE = "ONLINE"
    OFFLINE = "OFFLINE"


@dataclass_json
@dataclasses.dataclass
class SQLInstancesVerifyExternalSyncSettingsRequest:
    r"""SQLInstancesVerifyExternalSyncSettingsRequest
    Instance verify external sync settings request.
    """
    
    mysql_sync_config: Optional[shared_mysqlsyncconfig.MySQLSyncConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mysqlSyncConfig') }})
    sync_mode: Optional[SQLInstancesVerifyExternalSyncSettingsRequestSyncModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('syncMode') }})
    verify_connection_only: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verifyConnectionOnly') }})
    verify_replication_only: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verifyReplicationOnly') }})
    
