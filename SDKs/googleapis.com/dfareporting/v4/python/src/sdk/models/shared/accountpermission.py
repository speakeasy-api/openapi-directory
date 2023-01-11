import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AccountPermissionAccountProfilesEnum(str, Enum):
    ACCOUNT_PROFILE_BASIC = "ACCOUNT_PROFILE_BASIC"
    ACCOUNT_PROFILE_STANDARD = "ACCOUNT_PROFILE_STANDARD"

class AccountPermissionLevelEnum(str, Enum):
    USER = "USER"
    ADMINISTRATOR = "ADMINISTRATOR"


@dataclass_json
@dataclasses.dataclass
class AccountPermission:
    r"""AccountPermission
    AccountPermissions contains information about a particular account permission. Some features of Campaign Manager require an account permission to be present in the account.
    """
    
    account_profiles: Optional[list[AccountPermissionAccountProfilesEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountProfiles') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    level: Optional[AccountPermissionLevelEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('level') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    permission_group_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissionGroupId') }})
    
