import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import playlist as shared_playlist


@dataclasses.dataclass
class GetPlaylistsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPlaylistsIDQueryParams:
    expand: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'expand', 'style': 'form', 'explode': True }})
    fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPlaylistsIDRequest:
    path_params: GetPlaylistsIDPathParams = dataclasses.field()
    query_params: GetPlaylistsIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPlaylistsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    playlist: Optional[shared_playlist.Playlist] = dataclasses.field(default=None)
    
