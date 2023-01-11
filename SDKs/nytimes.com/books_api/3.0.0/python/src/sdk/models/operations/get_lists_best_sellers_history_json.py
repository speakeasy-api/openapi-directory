import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetListsBestSellersHistoryJSONQueryParams:
    age_group: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'age-group', 'style': 'form', 'explode': True }})
    author: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'author', 'style': 'form', 'explode': True }})
    contributor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'contributor', 'style': 'form', 'explode': True }})
    isbn: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'isbn', 'style': 'form', 'explode': True }})
    price: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'price', 'style': 'form', 'explode': True }})
    publisher: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'publisher', 'style': 'form', 'explode': True }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'title', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetListsBestSellersHistoryJSONSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass_json
@dataclasses.dataclass
class GetListsBestSellersHistoryJSON200ApplicationJSONResultsIsbns:
    isbn10: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isbn10') }})
    isbn13: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isbn13') }})
    

@dataclass_json
@dataclasses.dataclass
class GetListsBestSellersHistoryJSON200ApplicationJSONResultsRanksHistory:
    asterisk: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('asterisk') }})
    bestsellers_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bestsellers_date') }})
    dagger: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dagger') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_name') }})
    list_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('list_name') }})
    primary_isbn10: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary_isbn10') }})
    primary_isbn13: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary_isbn13') }})
    published_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('published_date') }})
    rank: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rank') }})
    ranks_last_week: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ranks_last_week') }})
    weeks_on_list: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weeks_on_list') }})
    

@dataclass_json
@dataclasses.dataclass
class GetListsBestSellersHistoryJSON200ApplicationJSONResultsReviews:
    article_chapter_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('article_chapter_link') }})
    book_review_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('book_review_link') }})
    first_chapter_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_chapter_link') }})
    sunday_review_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sunday_review_link') }})
    

@dataclass_json
@dataclasses.dataclass
class GetListsBestSellersHistoryJSON200ApplicationJSONResults:
    age_group: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('age_group') }})
    author: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('author') }})
    contributor: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contributor') }})
    contributor_note: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contributor_note') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    isbns: Optional[list[GetListsBestSellersHistoryJSON200ApplicationJSONResultsIsbns]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isbns') }})
    price: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    publisher: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisher') }})
    ranks_history: Optional[list[GetListsBestSellersHistoryJSON200ApplicationJSONResultsRanksHistory]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ranks_history') }})
    reviews: Optional[list[GetListsBestSellersHistoryJSON200ApplicationJSONResultsReviews]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reviews') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclasses.dataclass
class GetListsBestSellersHistoryJSON200ApplicationJSON:
    copyright: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyright') }})
    num_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_results') }})
    results: Optional[list[GetListsBestSellersHistoryJSON200ApplicationJSONResults]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclasses.dataclass
class GetListsBestSellersHistoryJSONRequest:
    query_params: GetListsBestSellersHistoryJSONQueryParams = dataclasses.field()
    security: GetListsBestSellersHistoryJSONSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetListsBestSellersHistoryJSONResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_lists_best_sellers_history_json_200_application_json_object: Optional[GetListsBestSellersHistoryJSON200ApplicationJSON] = dataclasses.field(default=None)
    
