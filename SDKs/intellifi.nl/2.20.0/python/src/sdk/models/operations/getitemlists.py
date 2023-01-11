import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import itemlist as shared_itemlist


@dataclasses.dataclass
class GetItemListsQueryParams:
    after: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'after', 'style': 'form', 'explode': True }})
    after_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'after_id', 'style': 'form', 'explode': True }})
    before: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'before', 'style': 'form', 'explode': True }})
    before_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'before_id', 'style': 'form', 'explode': True }})
    from_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    from_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'from_id', 'style': 'form', 'explode': True }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    id_only: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id_only', 'style': 'form', 'explode': True }})
    label: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'label', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    metadata: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'metadata', 'style': 'form', 'explode': True }})
    populate: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'populate', 'style': 'form', 'explode': True }})
    results_only: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'results_only', 'style': 'form', 'explode': True }})
    select: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'select', 'style': 'form', 'explode': True }})
    sha1: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sha1', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    text: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    time_created: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'time_created', 'style': 'form', 'explode': True }})
    time_updated: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'time_updated', 'style': 'form', 'explode': True }})
    timeout_s: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timeout_s', 'style': 'form', 'explode': True }})
    total: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'total', 'style': 'form', 'explode': True }})
    until: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'until', 'style': 'form', 'explode': True }})
    until_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'until_id', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetItemLists200ApplicationJSON:
    count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    count_current: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count_current') }})
    is_limited: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_limited') }})
    next_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_url') }})
    query_duration_ms: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query_duration_ms') }})
    results: Optional[list[shared_itemlist.ItemList]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclasses.dataclass
class GetItemListsRequest:
    query_params: GetItemListsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetItemListsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_item_lists_200_application_json_object: Optional[GetItemLists200ApplicationJSON] = dataclasses.field(default=None)
    
