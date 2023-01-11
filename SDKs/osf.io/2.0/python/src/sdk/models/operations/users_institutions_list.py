import dataclasses
from typing import Optional


@dataclasses.dataclass
class UsersInstitutionsListPathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UsersInstitutionsListRequest:
    path_params: UsersInstitutionsListPathParams = dataclasses.field()
    

@dataclasses.dataclass
class UsersInstitutionsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
