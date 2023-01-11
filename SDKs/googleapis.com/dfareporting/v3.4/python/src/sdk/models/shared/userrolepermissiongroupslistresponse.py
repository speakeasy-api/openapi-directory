import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import userrolepermissiongroup as shared_userrolepermissiongroup


@dataclass_json
@dataclasses.dataclass
class UserRolePermissionGroupsListResponse:
    r"""UserRolePermissionGroupsListResponse
    User Role Permission Group List Response
    """
    
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    user_role_permission_groups: Optional[list[shared_userrolepermissiongroup.UserRolePermissionGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userRolePermissionGroups') }})
    
