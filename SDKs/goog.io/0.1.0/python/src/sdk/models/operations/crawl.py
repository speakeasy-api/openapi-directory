import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import httpvalidationerror as shared_httpvalidationerror


@dataclasses.dataclass
class CrawlPathParams:
    query: str = dataclasses.field(metadata={'path_param': { 'field_name': 'query', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class Crawl200ApplicationJSON:
    answer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answer') }})
    results: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    total: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclasses.dataclass
class CrawlRequest:
    path_params: CrawlPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CrawlResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    crawl_200_application_json_object: Optional[Crawl200ApplicationJSON] = dataclasses.field(default=None)
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    
