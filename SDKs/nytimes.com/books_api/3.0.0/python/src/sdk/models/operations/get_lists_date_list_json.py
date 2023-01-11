import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetListsDateListJSONPathParams:
    date_: str = dataclasses.field(metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    list: str = dataclasses.field(metadata={'path_param': { 'field_name': 'list', 'style': 'simple', 'explode': False }})
    
class GetListsDateListJSONSortOrderEnum(str, Enum):
    ASC = "ASC"
    DESC = "DESC"


@dataclasses.dataclass
class GetListsDateListJSONQueryParams:
    bestsellers_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'bestsellers-date', 'style': 'form', 'explode': True }})
    isbn: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'isbn', 'style': 'form', 'explode': True }})
    list_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'list-name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    published_date: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'published-date', 'style': 'form', 'explode': True }})
    rank: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rank', 'style': 'form', 'explode': True }})
    rank_last_week: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rank-last-week', 'style': 'form', 'explode': True }})
    sort_order: Optional[GetListsDateListJSONSortOrderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort-order', 'style': 'form', 'explode': True }})
    weeks_on_list: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'weeks-on-list', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetListsDateListJSONSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass_json
@dataclasses.dataclass
class GetListsDateListJSON200ApplicationJSONResultsBooksIsbns:
    isbn10: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isbn10') }})
    isbn13: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isbn13') }})
    

@dataclass_json
@dataclasses.dataclass
class GetListsDateListJSON200ApplicationJSONResultsBooks:
    age_group: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('age_group') }})
    amazon_product_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amazon_product_url') }})
    article_chapter_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('article_chapter_link') }})
    asterisk: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('asterisk') }})
    author: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('author') }})
    book_image: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('book_image') }})
    book_review_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('book_review_link') }})
    contributor: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contributor') }})
    contributor_note: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contributor_note') }})
    dagger: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dagger') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    first_chapter_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_chapter_link') }})
    isbns: Optional[list[GetListsDateListJSON200ApplicationJSONResultsBooksIsbns]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isbns') }})
    price: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    primary_isbn10: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary_isbn10') }})
    primary_isbn13: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary_isbn13') }})
    publisher: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisher') }})
    rank: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rank') }})
    rank_last_week: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rank_last_week') }})
    sunday_review_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sunday_review_link') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    weeks_on_list: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weeks_on_list') }})
    

@dataclass_json
@dataclasses.dataclass
class GetListsDateListJSON200ApplicationJSONResults:
    bestsellers_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bestsellers_date') }})
    books: Optional[list[GetListsDateListJSON200ApplicationJSONResultsBooks]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('books') }})
    corrections: Optional[list[dict[str, Any]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('corrections') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_name') }})
    list_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('list_name') }})
    normal_list_ends_at: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('normal_list_ends_at') }})
    published_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('published_date') }})
    updated: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated') }})
    

@dataclass_json
@dataclasses.dataclass
class GetListsDateListJSON200ApplicationJSON:
    copyright: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyright') }})
    last_modified: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_modified') }})
    num_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_results') }})
    results: Optional[GetListsDateListJSON200ApplicationJSONResults] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclasses.dataclass
class GetListsDateListJSONRequest:
    path_params: GetListsDateListJSONPathParams = dataclasses.field()
    query_params: GetListsDateListJSONQueryParams = dataclasses.field()
    security: GetListsDateListJSONSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetListsDateListJSONResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_lists_date_list_json_200_application_json_object: Optional[GetListsDateListJSON200ApplicationJSON] = dataclasses.field(default=None)
    
