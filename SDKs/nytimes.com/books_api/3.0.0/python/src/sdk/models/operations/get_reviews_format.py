import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security

class GetReviewsFormatFormatEnum(str, Enum):
    JSON = "json"
    JSONP = "jsonp"


@dataclasses.dataclass
class GetReviewsFormatPathParams:
    format: GetReviewsFormatFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetReviewsFormatQueryParams:
    api_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'api-key', 'style': 'form', 'explode': True }})
    author: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'author', 'style': 'form', 'explode': True }})
    isbn: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'isbn', 'style': 'form', 'explode': True }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'title', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetReviewsFormatSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass_json
@dataclasses.dataclass
class GetReviewsFormat200ApplicationJSONResults:
    book_author: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('book_author') }})
    book_title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('book_title') }})
    byline: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('byline') }})
    isbn13: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isbn13') }})
    publication_dt: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publication_dt') }})
    summary: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class GetReviewsFormat200ApplicationJSON:
    copyright: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyright') }})
    num_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_results') }})
    results: Optional[list[GetReviewsFormat200ApplicationJSONResults]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclasses.dataclass
class GetReviewsFormatRequest:
    path_params: GetReviewsFormatPathParams = dataclasses.field()
    query_params: GetReviewsFormatQueryParams = dataclasses.field()
    security: GetReviewsFormatSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetReviewsFormatResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_reviews_format_200_application_json_object: Optional[GetReviewsFormat200ApplicationJSON] = dataclasses.field(default=None)
    
