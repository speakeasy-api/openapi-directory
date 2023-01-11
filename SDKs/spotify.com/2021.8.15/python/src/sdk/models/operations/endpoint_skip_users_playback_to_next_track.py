import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import errorresponseobject as shared_errorresponseobject


@dataclasses.dataclass
class EndpointSkipUsersPlaybackToNextTrackQueryParams:
    device_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'device_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class EndpointSkipUsersPlaybackToNextTrackHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointSkipUsersPlaybackToNextTrackSecurity:
    spotify_auth: shared_security.SchemeSpotifyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EndpointSkipUsersPlaybackToNextTrackRequest:
    headers: EndpointSkipUsersPlaybackToNextTrackHeaders = dataclasses.field()
    query_params: EndpointSkipUsersPlaybackToNextTrackQueryParams = dataclasses.field()
    security: EndpointSkipUsersPlaybackToNextTrackSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EndpointSkipUsersPlaybackToNextTrackResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_object: Optional[shared_errorresponseobject.ErrorResponseObject] = dataclasses.field(default=None)
    
