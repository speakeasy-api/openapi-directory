import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import userrolepermission as shared_userrolepermission


@dataclass_json
@dataclasses.dataclass
class UserRolePermissionsListResponse:
    r"""UserRolePermissionsListResponse
    User Role Permission List Response
    """
    
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    user_role_permissions: Optional[list[shared_userrolepermission.UserRolePermission]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userRolePermissions') }})
    
