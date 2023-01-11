import dataclasses
from typing import Optional
from enum import Enum
from ..shared import permissionname_enum as shared_permissionname_enum
from ..shared import error as shared_error
from ..shared import userresponse as shared_userresponse


@dataclasses.dataclass
class PostUsersUserEmailPermissionsPermissionNamePathParams:
    permission_name: shared_permissionname_enum.PermissionNameEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'permissionName', 'style': 'simple', 'explode': False }})
    user_email: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userEmail', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostUsersUserEmailPermissionsPermissionNameRequest:
    path_params: PostUsersUserEmailPermissionsPermissionNamePathParams = dataclasses.field()
    

@dataclasses.dataclass
class PostUsersUserEmailPermissionsPermissionNameResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    user_response: Optional[shared_userresponse.UserResponse] = dataclasses.field(default=None)
    
