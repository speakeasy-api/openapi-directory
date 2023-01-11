import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import error as shared_error


@dataclasses.dataclass
class PostRepostsTracksTrackIDPathParams:
    track_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'track_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostRepostsTracksTrackIDSecurity:
    auth_header: shared_security.SchemeAuthHeader = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PostRepostsTracksTrackIDRequest:
    path_params: PostRepostsTracksTrackIDPathParams = dataclasses.field()
    security: PostRepostsTracksTrackIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostRepostsTracksTrackIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
