import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import target as shared_target


@dataclasses.dataclass
class GetTargetsQueryParams:
    length: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'length', 'style': 'form', 'explode': True }})
    ordering: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ordering', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    search: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargets200ApplicationJSON:
    length: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('length') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_total: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_total') }})
    pagination_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination_count') }})
    results: Optional[list[shared_target.Target]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargets401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargets404ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargets500ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class GetTargetsRequest:
    query_params: GetTargetsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTargetsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_targets_200_application_json_object: Optional[GetTargets200ApplicationJSON] = dataclasses.field(default=None)
    get_targets_401_application_json_object: Optional[GetTargets401ApplicationJSON] = dataclasses.field(default=None)
    get_targets_404_application_json_object: Optional[GetTargets404ApplicationJSON] = dataclasses.field(default=None)
    get_targets_500_application_json_object: Optional[GetTargets500ApplicationJSON] = dataclasses.field(default=None)
    
