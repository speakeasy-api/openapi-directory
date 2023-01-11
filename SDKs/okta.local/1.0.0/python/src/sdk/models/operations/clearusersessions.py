import dataclasses
from typing import Optional


@dataclasses.dataclass
class ClearUserSessionsPathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ClearUserSessionsRequest:
    path_params: ClearUserSessionsPathParams = dataclasses.field()
    request: Optional[bytes] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/octet-stream' }})
    

@dataclasses.dataclass
class ClearUserSessionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
