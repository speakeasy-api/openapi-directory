import dataclasses
from typing import Optional
from ..shared import permissionlist as shared_permissionlist


@dataclasses.dataclass
class GetUserPermissionsPathParams:
    user_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUserPermissionsRequest:
    path_params: GetUserPermissionsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUserPermissionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    permission_list: Optional[shared_permissionlist.PermissionList] = dataclasses.field(default=None)
    
