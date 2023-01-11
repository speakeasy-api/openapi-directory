import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import albumsobject as shared_albumsobject
from ..shared import errorresponseobject as shared_errorresponseobject


@dataclasses.dataclass
class EndpointGetMultipleAlbumsQueryParams:
    ids: str = dataclasses.field(metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    market: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'market', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class EndpointGetMultipleAlbumsHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointGetMultipleAlbumsSecurity:
    spotify_auth: shared_security.SchemeSpotifyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EndpointGetMultipleAlbumsRequest:
    headers: EndpointGetMultipleAlbumsHeaders = dataclasses.field()
    query_params: EndpointGetMultipleAlbumsQueryParams = dataclasses.field()
    security: EndpointGetMultipleAlbumsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EndpointGetMultipleAlbumsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    albums_object: Optional[shared_albumsobject.AlbumsObject] = dataclasses.field(default=None)
    error_response_object: Optional[shared_errorresponseobject.ErrorResponseObject] = dataclasses.field(default=None)
    
