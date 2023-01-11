import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import artistsobject as shared_artistsobject
from ..shared import errorresponseobject as shared_errorresponseobject


@dataclasses.dataclass
class EndpointGetAnArtistsRelatedArtistsPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointGetAnArtistsRelatedArtistsHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointGetAnArtistsRelatedArtistsSecurity:
    spotify_auth: shared_security.SchemeSpotifyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EndpointGetAnArtistsRelatedArtistsRequest:
    headers: EndpointGetAnArtistsRelatedArtistsHeaders = dataclasses.field()
    path_params: EndpointGetAnArtistsRelatedArtistsPathParams = dataclasses.field()
    security: EndpointGetAnArtistsRelatedArtistsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EndpointGetAnArtistsRelatedArtistsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    artists_object: Optional[shared_artistsobject.ArtistsObject] = dataclasses.field(default=None)
    error_response_object: Optional[shared_errorresponseobject.ErrorResponseObject] = dataclasses.field(default=None)
    
