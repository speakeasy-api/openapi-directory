import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import article as shared_article

class GetContentSourceSectionJSONSourceEnum(str, Enum):
    ALL = "all"
    NYT = "nyt"
    IHT = "iht"


@dataclasses.dataclass
class GetContentSourceSectionJSONPathParams:
    section: str = dataclasses.field(metadata={'path_param': { 'field_name': 'section', 'style': 'simple', 'explode': False }})
    source: GetContentSourceSectionJSONSourceEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'source', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetContentSourceSectionJSONQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetContentSourceSectionJSON200ApplicationJSON:
    copyright: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyright') }})
    num_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_results') }})
    results: Optional[list[shared_article.Article]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclasses.dataclass
class GetContentSourceSectionJSONRequest:
    path_params: GetContentSourceSectionJSONPathParams = dataclasses.field()
    query_params: GetContentSourceSectionJSONQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetContentSourceSectionJSONResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_content_source_section_json_200_application_json_object: Optional[GetContentSourceSectionJSON200ApplicationJSON] = dataclasses.field(default=None)
    
