import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import currentlyplayingcontextobject as shared_currentlyplayingcontextobject
from ..shared import errorresponseobject as shared_errorresponseobject


@dataclasses.dataclass
class EndpointGetInformationAboutTheUsersCurrentPlaybackQueryParams:
    additional_types: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'additional_types', 'style': 'form', 'explode': True }})
    market: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'market', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class EndpointGetInformationAboutTheUsersCurrentPlaybackHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointGetInformationAboutTheUsersCurrentPlaybackSecurity:
    spotify_auth: shared_security.SchemeSpotifyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EndpointGetInformationAboutTheUsersCurrentPlaybackRequest:
    headers: EndpointGetInformationAboutTheUsersCurrentPlaybackHeaders = dataclasses.field()
    query_params: EndpointGetInformationAboutTheUsersCurrentPlaybackQueryParams = dataclasses.field()
    security: EndpointGetInformationAboutTheUsersCurrentPlaybackSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EndpointGetInformationAboutTheUsersCurrentPlaybackResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    currently_playing_context_object: Optional[shared_currentlyplayingcontextobject.CurrentlyPlayingContextObject] = dataclasses.field(default=None)
    error_response_object: Optional[shared_errorresponseobject.ErrorResponseObject] = dataclasses.field(default=None)
    
