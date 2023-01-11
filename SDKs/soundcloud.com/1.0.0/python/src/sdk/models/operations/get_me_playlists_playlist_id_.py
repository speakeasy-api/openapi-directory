import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import playlist as shared_playlist


@dataclasses.dataclass
class GetMePlaylistsPlaylistIDPathParams:
    playlist_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'playlist_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMePlaylistsPlaylistIDSecurity:
    auth_header: shared_security.SchemeAuthHeader = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetMePlaylistsPlaylistIDRequest:
    path_params: GetMePlaylistsPlaylistIDPathParams = dataclasses.field()
    security: GetMePlaylistsPlaylistIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetMePlaylistsPlaylistIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    playlist: Optional[shared_playlist.Playlist] = dataclasses.field(default=None)
    
