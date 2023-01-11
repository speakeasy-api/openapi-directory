import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import error as shared_error


@dataclasses.dataclass
class DeleteRepostsTracksTrackIDPathParams:
    track_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'track_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteRepostsTracksTrackIDSecurity:
    auth_header: shared_security.SchemeAuthHeader = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class DeleteRepostsTracksTrackIDRequest:
    path_params: DeleteRepostsTracksTrackIDPathParams = dataclasses.field()
    security: DeleteRepostsTracksTrackIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteRepostsTracksTrackIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
