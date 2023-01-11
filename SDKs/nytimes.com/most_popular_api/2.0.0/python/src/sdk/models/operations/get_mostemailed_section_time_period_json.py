import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import section_enum as shared_section_enum
from ..shared import timeperiod_enum as shared_timeperiod_enum
from ..shared import security as shared_security
from ..shared import articlewithcounttype as shared_articlewithcounttype


@dataclasses.dataclass
class GetMostemailedSectionTimePeriodJSONPathParams:
    section: shared_section_enum.SectionEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'section', 'style': 'simple', 'explode': False }})
    time_period: shared_timeperiod_enum.TimePeriodEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'time-period', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMostemailedSectionTimePeriodJSONSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass_json
@dataclasses.dataclass
class GetMostemailedSectionTimePeriodJSON200ApplicationJSON:
    copyright: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyright') }})
    num_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_results') }})
    results: Optional[list[shared_articlewithcounttype.ArticleWithCountType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class GetMostemailedSectionTimePeriodJSON400ApplicationJSON:
    copyright: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyright') }})
    errors: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    results: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclasses.dataclass
class GetMostemailedSectionTimePeriodJSONRequest:
    path_params: GetMostemailedSectionTimePeriodJSONPathParams = dataclasses.field()
    security: GetMostemailedSectionTimePeriodJSONSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetMostemailedSectionTimePeriodJSONResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    get_mostemailed_section_time_period_json_200_application_json_object: Optional[GetMostemailedSectionTimePeriodJSON200ApplicationJSON] = dataclasses.field(default=None)
    get_mostemailed_section_time_period_json_400_application_json_object: Optional[GetMostemailedSectionTimePeriodJSON400ApplicationJSON] = dataclasses.field(default=None)
    get_mostemailed_section_time_period_json_403_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
