import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import errorresponseobject as shared_errorresponseobject


@dataclasses.dataclass
class EndpointUploadCustomPlaylistCoverPathParams:
    playlist_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'playlist_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointUploadCustomPlaylistCoverHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    content_type: str = dataclasses.field(metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointUploadCustomPlaylistCoverSecurity:
    spotify_auth: shared_security.SchemeSpotifyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EndpointUploadCustomPlaylistCoverRequest:
    headers: EndpointUploadCustomPlaylistCoverHeaders = dataclasses.field()
    path_params: EndpointUploadCustomPlaylistCoverPathParams = dataclasses.field()
    request: str = dataclasses.field(metadata={'request': { 'media_type': 'image/jpeg' }})
    security: EndpointUploadCustomPlaylistCoverSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EndpointUploadCustomPlaylistCoverResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_object: Optional[shared_errorresponseobject.ErrorResponseObject] = dataclasses.field(default=None)
    
