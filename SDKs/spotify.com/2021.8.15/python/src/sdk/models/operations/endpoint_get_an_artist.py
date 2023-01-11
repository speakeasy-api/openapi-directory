import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import artistobject as shared_artistobject
from ..shared import errorresponseobject as shared_errorresponseobject


@dataclasses.dataclass
class EndpointGetAnArtistPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointGetAnArtistHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointGetAnArtistSecurity:
    spotify_auth: shared_security.SchemeSpotifyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EndpointGetAnArtistRequest:
    headers: EndpointGetAnArtistHeaders = dataclasses.field()
    path_params: EndpointGetAnArtistPathParams = dataclasses.field()
    security: EndpointGetAnArtistSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EndpointGetAnArtistResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    artist_object: Optional[shared_artistobject.ArtistObject] = dataclasses.field(default=None)
    error_response_object: Optional[shared_errorresponseobject.ErrorResponseObject] = dataclasses.field(default=None)
    
