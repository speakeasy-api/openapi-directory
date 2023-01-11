import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import section_enum as shared_section_enum
from ..shared import timeperiod_enum as shared_timeperiod_enum
from ..shared import security as shared_security
from ..shared import article as shared_article


@dataclasses.dataclass
class GetMostsharedSectionTimePeriodJSONPathParams:
    section: shared_section_enum.SectionEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'section', 'style': 'simple', 'explode': False }})
    time_period: shared_timeperiod_enum.TimePeriodEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'time-period', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMostsharedSectionTimePeriodJSONSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass_json
@dataclasses.dataclass
class GetMostsharedSectionTimePeriodJSON200ApplicationJSON:
    copyright: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyright') }})
    num_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_results') }})
    results: Optional[list[shared_article.Article]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class GetMostsharedSectionTimePeriodJSON400ApplicationJSON:
    copyright: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyright') }})
    errors: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    results: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclasses.dataclass
class GetMostsharedSectionTimePeriodJSONRequest:
    path_params: GetMostsharedSectionTimePeriodJSONPathParams = dataclasses.field()
    security: GetMostsharedSectionTimePeriodJSONSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetMostsharedSectionTimePeriodJSONResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_mostshared_section_time_period_json_200_application_json_object: Optional[GetMostsharedSectionTimePeriodJSON200ApplicationJSON] = dataclasses.field(default=None)
    get_mostshared_section_time_period_json_400_application_json_object: Optional[GetMostsharedSectionTimePeriodJSON400ApplicationJSON] = dataclasses.field(default=None)
    
