import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import errorresponseobject as shared_errorresponseobject


@dataclasses.dataclass
class EndpointToggleShuffleForUsersPlaybackQueryParams:
    state: bool = dataclasses.field(metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    device_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'device_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class EndpointToggleShuffleForUsersPlaybackHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointToggleShuffleForUsersPlaybackSecurity:
    spotify_auth: shared_security.SchemeSpotifyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EndpointToggleShuffleForUsersPlaybackRequest:
    headers: EndpointToggleShuffleForUsersPlaybackHeaders = dataclasses.field()
    query_params: EndpointToggleShuffleForUsersPlaybackQueryParams = dataclasses.field()
    security: EndpointToggleShuffleForUsersPlaybackSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EndpointToggleShuffleForUsersPlaybackResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_object: Optional[shared_errorresponseobject.ErrorResponseObject] = dataclasses.field(default=None)
    
