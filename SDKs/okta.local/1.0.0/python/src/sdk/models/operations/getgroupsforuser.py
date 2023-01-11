import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetGroupsForUserPathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetGroupsForUserRequest:
    path_params: GetGroupsForUserPathParams = dataclasses.field()
    request: Optional[bytes] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/octet-stream' }})
    

@dataclasses.dataclass
class GetGroupsForUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
