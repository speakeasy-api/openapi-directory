import dataclasses
from typing import Optional
from enum import Enum
from ..shared import access_enum as shared_access_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import error as shared_error
from ..shared import playlist as shared_playlist


@dataclasses.dataclass
class GetPlaylistsPlaylistIDPathParams:
    playlist_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'playlist_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPlaylistsPlaylistIDQueryParams:
    access: Optional[list[shared_access_enum.AccessEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access', 'style': 'form', 'explode': False }})
    secret_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'secret_token', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPlaylistsPlaylistIDSecurity:
    auth_header: shared_security.SchemeAuthHeader = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    client_id: shared_security.SchemeClientID = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class GetPlaylistsPlaylistIDRequest:
    path_params: GetPlaylistsPlaylistIDPathParams = dataclasses.field()
    query_params: GetPlaylistsPlaylistIDQueryParams = dataclasses.field()
    security: GetPlaylistsPlaylistIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetPlaylistsPlaylistIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    playlist: Optional[shared_playlist.Playlist] = dataclasses.field(default=None)
    
