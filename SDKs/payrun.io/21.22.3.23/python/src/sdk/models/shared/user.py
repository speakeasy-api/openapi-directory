import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class UserUserPermission:
    r"""UserUserPermission
    The users' permissions
    """
    
    permission: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Permission') }})
    

@dataclass_json
@dataclasses.dataclass
class UserUserRoles:
    r"""UserUserRoles
    The users' roles
    """
    
    role: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Role') }})
    

@dataclass_json
@dataclasses.dataclass
class UserUser:
    meta_data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetaData') }})
    permissions: Optional[UserUserPermission] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Permissions') }})
    roles: Optional[UserUserRoles] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Roles') }})
    user_identifier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserIdentifier') }})
    

@dataclass_json
@dataclasses.dataclass
class User:
    user: Optional[UserUser] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('User') }})
    
