import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import order_enum as shared_order_enum
from ..shared import label_search_result_item as shared_label_search_result_item
from ..shared import basic_error as shared_basic_error
from ..shared import validation_error as shared_validation_error

class SearchLabelsSortEnum(str, Enum):
    CREATED = "created"
    UPDATED = "updated"


@dataclasses.dataclass
class SearchLabelsQueryParams:
    q: str = dataclasses.field(metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    repository_id: int = dataclasses.field(metadata={'query_param': { 'field_name': 'repository_id', 'style': 'form', 'explode': True }})
    order: Optional[shared_order_enum.OrderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    sort: Optional[SearchLabelsSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class SearchLabels200ApplicationJSON:
    incomplete_results: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('incomplete_results') }})
    items: list[shared_label_search_result_item.LabelSearchResultItem] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    total_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    

@dataclasses.dataclass
class SearchLabelsRequest:
    query_params: SearchLabelsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SearchLabelsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    search_labels_200_application_json_object: Optional[SearchLabels200ApplicationJSON] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
