import dataclasses
from typing import Optional


@dataclasses.dataclass
class UsersNodesListPathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UsersNodesListRequest:
    path_params: UsersNodesListPathParams = dataclasses.field()
    

@dataclasses.dataclass
class UsersNodesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
