import dataclasses
from typing import Optional


@dataclasses.dataclass
class UsersPreprintsListPathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UsersPreprintsListRequest:
    path_params: UsersPreprintsListPathParams = dataclasses.field()
    

@dataclasses.dataclass
class UsersPreprintsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
