import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import error as shared_error
from ..shared import playlist as shared_playlist


@dataclasses.dataclass
class GetMePlaylistsQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetMePlaylistsSecurity:
    auth_header: shared_security.SchemeAuthHeader = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetMePlaylistsRequest:
    query_params: GetMePlaylistsQueryParams = dataclasses.field()
    security: GetMePlaylistsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetMePlaylistsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    playlists_array: Optional[list[shared_playlist.Playlist]] = dataclasses.field(default=None)
    
