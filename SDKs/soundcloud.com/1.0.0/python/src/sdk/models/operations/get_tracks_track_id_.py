import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import error as shared_error
from ..shared import track as shared_track


@dataclasses.dataclass
class GetTracksTrackIDPathParams:
    track_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'track_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTracksTrackIDQueryParams:
    secret_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'secret_token', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTracksTrackIDSecurity:
    client_id: shared_security.SchemeClientID = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class GetTracksTrackIDRequest:
    path_params: GetTracksTrackIDPathParams = dataclasses.field()
    query_params: GetTracksTrackIDQueryParams = dataclasses.field()
    security: GetTracksTrackIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTracksTrackIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    track: Optional[shared_track.Track] = dataclasses.field(default=None)
    
