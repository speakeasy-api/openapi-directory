import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mysqlsyncconfig as shared_mysqlsyncconfig

class SQLInstancesStartExternalSyncRequestSyncModeEnum(str, Enum):
    EXTERNAL_SYNC_MODE_UNSPECIFIED = "EXTERNAL_SYNC_MODE_UNSPECIFIED"
    ONLINE = "ONLINE"
    OFFLINE = "OFFLINE"


@dataclass_json
@dataclasses.dataclass
class SQLInstancesStartExternalSyncRequest:
    mysql_sync_config: Optional[shared_mysqlsyncconfig.MySQLSyncConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mysqlSyncConfig') }})
    skip_verification: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skipVerification') }})
    sync_mode: Optional[SQLInstancesStartExternalSyncRequestSyncModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('syncMode') }})
    
