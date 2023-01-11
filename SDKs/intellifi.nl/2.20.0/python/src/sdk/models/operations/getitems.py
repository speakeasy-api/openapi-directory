import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import itemprotocol_enum as shared_itemprotocol_enum
from ..shared import technology_enum as shared_technology_enum
from ..shared import itemtype_enum as shared_itemtype_enum
from ..shared import item as shared_item


@dataclasses.dataclass
class GetItemsQueryParams:
    after: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'after', 'style': 'form', 'explode': True }})
    after_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'after_code', 'style': 'form', 'explode': True }})
    after_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'after_id', 'style': 'form', 'explode': True }})
    before: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'before', 'style': 'form', 'explode': True }})
    before_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'before_code', 'style': 'form', 'explode': True }})
    before_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'before_id', 'style': 'form', 'explode': True }})
    code_hex: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'code_hex', 'style': 'form', 'explode': True }})
    from_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    from_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'from_code', 'style': 'form', 'explode': True }})
    from_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'from_id', 'style': 'form', 'explode': True }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    id_only: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id_only', 'style': 'form', 'explode': True }})
    is_present: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'is_present', 'style': 'form', 'explode': True }})
    label: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'label', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    location: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'location', 'style': 'form', 'explode': True }})
    metadata: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'metadata', 'style': 'form', 'explode': True }})
    move_count: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'move_count', 'style': 'form', 'explode': True }})
    populate: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'populate', 'style': 'form', 'explode': True }})
    protocol: Optional[shared_itemprotocol_enum.ItemProtocolEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'protocol', 'style': 'form', 'explode': True }})
    results_only: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'results_only', 'style': 'form', 'explode': True }})
    select: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'select', 'style': 'form', 'explode': True }})
    sets: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sets', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    technology: Optional[shared_technology_enum.TechnologyEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'technology', 'style': 'form', 'explode': True }})
    text: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    time_created: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'time_created', 'style': 'form', 'explode': True }})
    time_last_present: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'time_last_present', 'style': 'form', 'explode': True }})
    time_moved: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'time_moved', 'style': 'form', 'explode': True }})
    time_updated: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'time_updated', 'style': 'form', 'explode': True }})
    timeout_s: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timeout_s', 'style': 'form', 'explode': True }})
    type: Optional[shared_itemtype_enum.ItemTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    until: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'until', 'style': 'form', 'explode': True }})
    until_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'until_code', 'style': 'form', 'explode': True }})
    until_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'until_id', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetItems200ApplicationJSON:
    count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    count_current: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count_current') }})
    is_limited: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_limited') }})
    next_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_url') }})
    query_duration_ms: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query_duration_ms') }})
    results: Optional[list[shared_item.Item]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclasses.dataclass
class GetItemsRequest:
    query_params: GetItemsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetItemsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_items_200_application_json_object: Optional[GetItems200ApplicationJSON] = dataclasses.field(default=None)
    
