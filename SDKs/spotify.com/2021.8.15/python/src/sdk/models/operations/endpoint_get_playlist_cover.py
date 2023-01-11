import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import errorresponseobject as shared_errorresponseobject
from ..shared import imageobject as shared_imageobject


@dataclasses.dataclass
class EndpointGetPlaylistCoverPathParams:
    playlist_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'playlist_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointGetPlaylistCoverHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointGetPlaylistCoverSecurity:
    spotify_auth: shared_security.SchemeSpotifyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EndpointGetPlaylistCoverRequest:
    headers: EndpointGetPlaylistCoverHeaders = dataclasses.field()
    path_params: EndpointGetPlaylistCoverPathParams = dataclasses.field()
    security: EndpointGetPlaylistCoverSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EndpointGetPlaylistCoverResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_object: Optional[shared_errorresponseobject.ErrorResponseObject] = dataclasses.field(default=None)
    image_objects: Optional[list[shared_imageobject.ImageObject]] = dataclasses.field(default=None)
    
