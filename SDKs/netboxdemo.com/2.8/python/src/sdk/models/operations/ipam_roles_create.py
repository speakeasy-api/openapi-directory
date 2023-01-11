import dataclasses
from typing import Optional
from ..shared import role as shared_role
from ..shared import role as shared_role


@dataclasses.dataclass
class IpamRolesCreateRequest:
    request: shared_role.RoleInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class IpamRolesCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    role: Optional[shared_role.Role] = dataclasses.field(default=None)
    
