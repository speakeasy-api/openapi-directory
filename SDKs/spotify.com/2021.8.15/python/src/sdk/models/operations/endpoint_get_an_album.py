import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import albumobject as shared_albumobject
from ..shared import errorresponseobject as shared_errorresponseobject


@dataclasses.dataclass
class EndpointGetAnAlbumPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointGetAnAlbumQueryParams:
    market: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'market', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class EndpointGetAnAlbumHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointGetAnAlbumSecurity:
    spotify_auth: shared_security.SchemeSpotifyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EndpointGetAnAlbumRequest:
    headers: EndpointGetAnAlbumHeaders = dataclasses.field()
    path_params: EndpointGetAnAlbumPathParams = dataclasses.field()
    query_params: EndpointGetAnAlbumQueryParams = dataclasses.field()
    security: EndpointGetAnAlbumSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EndpointGetAnAlbumResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    album_object: Optional[shared_albumobject.AlbumObject] = dataclasses.field(default=None)
    error_response_object: Optional[shared_errorresponseobject.ErrorResponseObject] = dataclasses.field(default=None)
    
