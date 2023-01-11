import dataclasses
from typing import Optional


@dataclasses.dataclass
class SuspendUserPathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SuspendUserRequest:
    path_params: SuspendUserPathParams = dataclasses.field()
    request: Optional[bytes] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/plain' }})
    

@dataclasses.dataclass
class SuspendUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
