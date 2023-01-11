import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import currentlyplayingobject as shared_currentlyplayingobject
from ..shared import errorresponseobject as shared_errorresponseobject


@dataclasses.dataclass
class EndpointGetTheUsersCurrentlyPlayingTrackQueryParams:
    market: str = dataclasses.field(metadata={'query_param': { 'field_name': 'market', 'style': 'form', 'explode': True }})
    additional_types: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'additional_types', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class EndpointGetTheUsersCurrentlyPlayingTrackHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointGetTheUsersCurrentlyPlayingTrackSecurity:
    spotify_auth: shared_security.SchemeSpotifyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EndpointGetTheUsersCurrentlyPlayingTrackRequest:
    headers: EndpointGetTheUsersCurrentlyPlayingTrackHeaders = dataclasses.field()
    query_params: EndpointGetTheUsersCurrentlyPlayingTrackQueryParams = dataclasses.field()
    security: EndpointGetTheUsersCurrentlyPlayingTrackSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EndpointGetTheUsersCurrentlyPlayingTrackResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    currently_playing_object: Optional[shared_currentlyplayingobject.CurrentlyPlayingObject] = dataclasses.field(default=None)
    error_response_object: Optional[shared_errorresponseobject.ErrorResponseObject] = dataclasses.field(default=None)
    
