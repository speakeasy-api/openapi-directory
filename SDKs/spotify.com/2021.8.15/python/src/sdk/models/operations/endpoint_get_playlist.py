import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import errorresponseobject as shared_errorresponseobject
from ..shared import playlistobject as shared_playlistobject


@dataclasses.dataclass
class EndpointGetPlaylistPathParams:
    playlist_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'playlist_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointGetPlaylistQueryParams:
    additional_types: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'additional_types', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    market: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'market', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class EndpointGetPlaylistHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointGetPlaylistSecurity:
    spotify_auth: shared_security.SchemeSpotifyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EndpointGetPlaylistRequest:
    headers: EndpointGetPlaylistHeaders = dataclasses.field()
    path_params: EndpointGetPlaylistPathParams = dataclasses.field()
    query_params: EndpointGetPlaylistQueryParams = dataclasses.field()
    security: EndpointGetPlaylistSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EndpointGetPlaylistResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_object: Optional[shared_errorresponseobject.ErrorResponseObject] = dataclasses.field(default=None)
    playlist_object: Optional[shared_playlistobject.PlaylistObject] = dataclasses.field(default=None)
    
