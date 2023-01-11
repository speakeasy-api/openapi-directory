import dataclasses
from typing import Optional
from enum import Enum
from ..shared import playlistresponse as shared_playlistresponse


@dataclasses.dataclass
class GetPlaylistByIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class GetPlaylistByIDSortEnum(str, Enum):
    RECENT_ADDED_FIRST = "recent_added_first"
    OLDEST_ADDED_FIRST = "oldest_added_first"
    RECENT_PUBLISHED_FIRST = "recent_published_first"
    OLDEST_PUBLISHED_FIRST = "oldest_published_first"

class GetPlaylistByIDTypeEnum(str, Enum):
    EPISODE_LIST = "episode_list"
    PODCAST_LIST = "podcast_list"


@dataclasses.dataclass
class GetPlaylistByIDQueryParams:
    last_timestamp_ms: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'last_timestamp_ms', 'style': 'form', 'explode': True }})
    sort: Optional[GetPlaylistByIDSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    type: Optional[GetPlaylistByIDTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPlaylistByIDHeaders:
    x_listen_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'X-ListenAPI-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPlaylistByIDRequest:
    headers: GetPlaylistByIDHeaders = dataclasses.field()
    path_params: GetPlaylistByIDPathParams = dataclasses.field()
    query_params: GetPlaylistByIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPlaylistByIDResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    playlist_response: Optional[shared_playlistresponse.PlaylistResponse] = dataclasses.field(default=None)
    
