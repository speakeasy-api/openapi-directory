import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import link as shared_link
from ..shared import pagination as shared_pagination
from ..shared import show as shared_show
from ..shared import error as shared_error


@dataclasses.dataclass
class GetShowsQueryParams:
    count: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    end: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'end', 'style': 'form', 'explode': True }})
    expand: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'expand', 'style': 'form', 'explode': True }})
    fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    start: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetShows200ApplicationJSONLinks:
    self: Optional[shared_link.Link] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclasses.dataclass
class GetShows200ApplicationJSON:
    links: Optional[GetShows200ApplicationJSONLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    meta: Optional[shared_pagination.Pagination] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_meta') }})
    items: Optional[list[shared_show.Show]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    

@dataclasses.dataclass
class GetShowsRequest:
    query_params: GetShowsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetShowsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    get_shows_200_application_json_object: Optional[GetShows200ApplicationJSON] = dataclasses.field(default=None)
    
