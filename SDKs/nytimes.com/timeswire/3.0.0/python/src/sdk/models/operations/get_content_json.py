import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import article as shared_article


@dataclasses.dataclass
class GetContentJSONQueryParams:
    url: str = dataclasses.field(metadata={'query_param': { 'field_name': 'url', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetContentJSON200ApplicationJSON:
    copyright: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyright') }})
    num_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_results') }})
    results: Optional[list[shared_article.Article]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclasses.dataclass
class GetContentJSONRequest:
    query_params: GetContentJSONQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetContentJSONResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_content_json_200_application_json_object: Optional[GetContentJSON200ApplicationJSON] = dataclasses.field(default=None)
    
