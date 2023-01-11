import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import doc as shared_doc


@dataclasses.dataclass
class GetYearMonthJSONPathParams:
    month: int = dataclasses.field(metadata={'path_param': { 'field_name': 'month', 'style': 'simple', 'explode': False }})
    year: int = dataclasses.field(metadata={'path_param': { 'field_name': 'year', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetYearMonthJSON200ApplicationJSONResponseMeta:
    hits: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hits') }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    time: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time') }})
    

@dataclass_json
@dataclasses.dataclass
class GetYearMonthJSON200ApplicationJSONResponse:
    docs: Optional[list[shared_doc.Doc]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('docs') }})
    meta: Optional[GetYearMonthJSON200ApplicationJSONResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclasses.dataclass
class GetYearMonthJSON200ApplicationJSON:
    response: Optional[GetYearMonthJSON200ApplicationJSONResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('response') }})
    

@dataclasses.dataclass
class GetYearMonthJSONRequest:
    path_params: GetYearMonthJSONPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetYearMonthJSONResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_year_month_json_200_application_json_object: Optional[GetYearMonthJSON200ApplicationJSON] = dataclasses.field(default=None)
    
