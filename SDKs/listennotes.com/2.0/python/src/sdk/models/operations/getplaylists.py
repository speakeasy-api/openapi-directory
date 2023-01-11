import dataclasses
from typing import Optional
from enum import Enum
from ..shared import playlistsresponse as shared_playlistsresponse

class GetPlaylistsSortEnum(str, Enum):
    RECENT_ADDED_FIRST = "recent_added_first"
    OLDEST_ADDED_FIRST = "oldest_added_first"
    NAME_A_TO_Z = "name_a_to_z"
    NAME_Z_TO_A = "name_z_to_a"


@dataclasses.dataclass
class GetPlaylistsQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    sort: Optional[GetPlaylistsSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPlaylistsHeaders:
    x_listen_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'X-ListenAPI-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPlaylistsRequest:
    headers: GetPlaylistsHeaders = dataclasses.field()
    query_params: GetPlaylistsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPlaylistsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    playlists_response: Optional[shared_playlistsresponse.PlaylistsResponse] = dataclasses.field(default=None)
    
