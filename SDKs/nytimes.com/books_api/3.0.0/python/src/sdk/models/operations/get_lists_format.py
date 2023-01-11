import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security

class GetListsFormatFormatEnum(str, Enum):
    JSON = "json"
    JSONP = "jsonp"


@dataclasses.dataclass
class GetListsFormatPathParams:
    format: GetListsFormatFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    
class GetListsFormatSortOrderEnum(str, Enum):
    ASC = "ASC"
    DESC = "DESC"


@dataclasses.dataclass
class GetListsFormatQueryParams:
    bestsellers_date: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'bestsellers-date', 'style': 'form', 'explode': True }})
    date_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date', 'style': 'form', 'explode': True }})
    isbn: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'isbn', 'style': 'form', 'explode': True }})
    list: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'list', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    published_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'published-date', 'style': 'form', 'explode': True }})
    rank: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rank', 'style': 'form', 'explode': True }})
    rank_last_week: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rank-last-week', 'style': 'form', 'explode': True }})
    sort_order: Optional[GetListsFormatSortOrderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort-order', 'style': 'form', 'explode': True }})
    weeks_on_list: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'weeks-on-list', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetListsFormatSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass_json
@dataclasses.dataclass
class GetListsFormat200ApplicationJSONResultsBookDetails:
    age_group: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('age_group') }})
    author: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('author') }})
    contributor: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contributor') }})
    contributor_note: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contributor_note') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    price: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    primary_isbn10: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary_isbn10') }})
    primary_isbn13: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary_isbn13') }})
    publisher: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisher') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclasses.dataclass
class GetListsFormat200ApplicationJSONResultsIsbns:
    isbn10: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isbn10') }})
    isbn13: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isbn13') }})
    

@dataclass_json
@dataclasses.dataclass
class GetListsFormat200ApplicationJSONResultsReviews:
    article_chapter_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('article_chapter_link') }})
    book_review_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('book_review_link') }})
    first_chapter_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_chapter_link') }})
    sunday_review_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sunday_review_link') }})
    

@dataclass_json
@dataclasses.dataclass
class GetListsFormat200ApplicationJSONResults:
    amazon_product_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amazon_product_url') }})
    asterisk: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('asterisk') }})
    bestsellers_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bestsellers_date') }})
    book_details: Optional[list[GetListsFormat200ApplicationJSONResultsBookDetails]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('book_details') }})
    dagger: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dagger') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_name') }})
    isbns: Optional[list[GetListsFormat200ApplicationJSONResultsIsbns]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isbns') }})
    list_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('list_name') }})
    published_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('published_date') }})
    rank: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rank') }})
    rank_last_week: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rank_last_week') }})
    reviews: Optional[list[GetListsFormat200ApplicationJSONResultsReviews]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reviews') }})
    weeks_on_list: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weeks_on_list') }})
    

@dataclass_json
@dataclasses.dataclass
class GetListsFormat200ApplicationJSON:
    copyright: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyright') }})
    last_modified: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_modified') }})
    num_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_results') }})
    results: Optional[list[GetListsFormat200ApplicationJSONResults]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclasses.dataclass
class GetListsFormatRequest:
    path_params: GetListsFormatPathParams = dataclasses.field()
    query_params: GetListsFormatQueryParams = dataclasses.field()
    security: GetListsFormatSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetListsFormatResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_lists_format_200_application_json_object: Optional[GetListsFormat200ApplicationJSON] = dataclasses.field(default=None)
    
