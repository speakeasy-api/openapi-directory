import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import errorresponseobject as shared_errorresponseobject


@dataclasses.dataclass
class EndpointSeekToPositionInCurrentlyPlayingTrackQueryParams:
    position_ms: int = dataclasses.field(metadata={'query_param': { 'field_name': 'position_ms', 'style': 'form', 'explode': True }})
    device_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'device_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class EndpointSeekToPositionInCurrentlyPlayingTrackHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointSeekToPositionInCurrentlyPlayingTrackSecurity:
    spotify_auth: shared_security.SchemeSpotifyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EndpointSeekToPositionInCurrentlyPlayingTrackRequest:
    headers: EndpointSeekToPositionInCurrentlyPlayingTrackHeaders = dataclasses.field()
    query_params: EndpointSeekToPositionInCurrentlyPlayingTrackQueryParams = dataclasses.field()
    security: EndpointSeekToPositionInCurrentlyPlayingTrackSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EndpointSeekToPositionInCurrentlyPlayingTrackResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_object: Optional[shared_errorresponseobject.ErrorResponseObject] = dataclasses.field(default=None)
    
