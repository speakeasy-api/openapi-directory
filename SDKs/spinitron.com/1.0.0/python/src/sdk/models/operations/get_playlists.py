import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import link as shared_link
from ..shared import pagination as shared_pagination
from ..shared import playlist as shared_playlist


@dataclasses.dataclass
class GetPlaylistsQueryParams:
    count: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    end: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'end', 'style': 'form', 'explode': True }})
    expand: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'expand', 'style': 'form', 'explode': True }})
    fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    persona_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'persona_id', 'style': 'form', 'explode': True }})
    show_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'show_id', 'style': 'form', 'explode': True }})
    start: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetPlaylists200ApplicationJSONLinks:
    self: Optional[shared_link.Link] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPlaylists200ApplicationJSON:
    links: Optional[GetPlaylists200ApplicationJSONLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    meta: Optional[shared_pagination.Pagination] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_meta') }})
    items: Optional[list[shared_playlist.Playlist]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    

@dataclasses.dataclass
class GetPlaylistsRequest:
    query_params: GetPlaylistsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPlaylistsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    get_playlists_200_application_json_object: Optional[GetPlaylists200ApplicationJSON] = dataclasses.field(default=None)
    
