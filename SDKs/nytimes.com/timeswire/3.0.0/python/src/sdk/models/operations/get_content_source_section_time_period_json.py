import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import article as shared_article

class GetContentSourceSectionTimePeriodJSONSourceEnum(str, Enum):
    ALL = "all"
    NYT = "nyt"
    IHT = "iht"


@dataclasses.dataclass
class GetContentSourceSectionTimePeriodJSONPathParams:
    section: str = dataclasses.field(metadata={'path_param': { 'field_name': 'section', 'style': 'simple', 'explode': False }})
    source: GetContentSourceSectionTimePeriodJSONSourceEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'source', 'style': 'simple', 'explode': False }})
    time_period: int = dataclasses.field(metadata={'path_param': { 'field_name': 'time-period', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetContentSourceSectionTimePeriodJSONQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetContentSourceSectionTimePeriodJSON200ApplicationJSON:
    copyright: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyright') }})
    num_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_results') }})
    results: Optional[list[shared_article.Article]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclasses.dataclass
class GetContentSourceSectionTimePeriodJSONRequest:
    path_params: GetContentSourceSectionTimePeriodJSONPathParams = dataclasses.field()
    query_params: GetContentSourceSectionTimePeriodJSONQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetContentSourceSectionTimePeriodJSONResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_content_source_section_time_period_json_200_application_json_object: Optional[GetContentSourceSectionTimePeriodJSON200ApplicationJSON] = dataclasses.field(default=None)
    
