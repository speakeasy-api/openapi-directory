import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sqlexternalsyncsettingerror as shared_sqlexternalsyncsettingerror


@dataclass_json
@dataclasses.dataclass
class SQLInstancesVerifyExternalSyncSettingsResponse:
    r"""SQLInstancesVerifyExternalSyncSettingsResponse
    Instance verify external sync settings response.
    """
    
    errors: Optional[list[shared_sqlexternalsyncsettingerror.SQLExternalSyncSettingError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    warnings: Optional[list[shared_sqlexternalsyncsettingerror.SQLExternalSyncSettingError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warnings') }})
    
