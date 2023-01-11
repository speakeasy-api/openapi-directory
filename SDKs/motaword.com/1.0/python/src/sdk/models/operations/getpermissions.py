import dataclasses
from typing import Optional
from ..shared import permissionlist as shared_permissionlist


@dataclasses.dataclass
class GetPermissionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    permission_list: Optional[shared_permissionlist.PermissionList] = dataclasses.field(default=None)
    
