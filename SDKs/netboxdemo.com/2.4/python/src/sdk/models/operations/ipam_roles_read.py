import dataclasses
from typing import Optional
from ..shared import role as shared_role


@dataclasses.dataclass
class IpamRolesReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class IpamRolesReadRequest:
    path_params: IpamRolesReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class IpamRolesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    role: Optional[shared_role.Role] = dataclasses.field(default=None)
    
