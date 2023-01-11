import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import artistsobject as shared_artistsobject
from ..shared import errorresponseobject as shared_errorresponseobject


@dataclasses.dataclass
class EndpointGetMultipleArtistsQueryParams:
    ids: str = dataclasses.field(metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class EndpointGetMultipleArtistsHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointGetMultipleArtistsSecurity:
    spotify_auth: shared_security.SchemeSpotifyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EndpointGetMultipleArtistsRequest:
    headers: EndpointGetMultipleArtistsHeaders = dataclasses.field()
    query_params: EndpointGetMultipleArtistsQueryParams = dataclasses.field()
    security: EndpointGetMultipleArtistsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EndpointGetMultipleArtistsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    artists_object: Optional[shared_artistsobject.ArtistsObject] = dataclasses.field(default=None)
    error_response_object: Optional[shared_errorresponseobject.ErrorResponseObject] = dataclasses.field(default=None)
    
