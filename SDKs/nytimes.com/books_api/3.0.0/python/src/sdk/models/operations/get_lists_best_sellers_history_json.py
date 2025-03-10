"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Any, Optional


@dataclasses.dataclass
class GETListsBestSellersHistoryJSONSecurity:
    
    api_key: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query', 'field_name': 'api-key' }})  
    

@dataclasses.dataclass
class GETListsBestSellersHistoryJSONRequest:
    
    age_group: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'age-group', 'style': 'form', 'explode': True }})
    r"""The target age group for the best seller."""  
    author: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'author', 'style': 'form', 'explode': True }})
    r"""The author of the best seller. The author field does not include additional contributors (see Data Structure for more details about the author and contributor fields).
    
    When searching the author field, you can specify any combination of first, middle and last names.
    
    When sort-by is set to author, the results will be sorted by author's first name.
    """  
    contributor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'contributor', 'style': 'form', 'explode': True }})
    r"""The author of the best seller, as well as other contributors such as the illustrator (to search or sort by author name only, use author instead).
    
    When searching, you can specify any combination of first, middle and last names of any of the contributors.
    
    When sort-by is set to contributor, the results will be sorted by the first name of the first contributor listed.
    """  
    isbn: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'isbn', 'style': 'form', 'explode': True }})
    r"""International Standard Book Number, 10 or 13 digits
    
    A best seller may have both 10-digit and 13-digit ISBNs, and may have multiple ISBNs of each type. To search on multiple ISBNs, separate the ISBNs with semicolons (example: 9780446579933;0061374229).
    """  
    price: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'price', 'style': 'form', 'explode': True }})
    r"""The publisher's list price of the best seller, including decimal point"""  
    publisher: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'publisher', 'style': 'form', 'explode': True }})
    r"""The standardized name of the publisher"""  
    title: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'title', 'style': 'form', 'explode': True }})
    r"""The title of the best seller
    
    When searching, you can specify a portion of a title or a full title.
    """  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GETListsBestSellersHistoryJSON200ApplicationJSONResultsIsbns:
    
    isbn10: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('isbn10'), 'exclude': lambda f: f is None }})  
    isbn13: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('isbn13'), 'exclude': lambda f: f is None }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GETListsBestSellersHistoryJSON200ApplicationJSONResultsRanksHistory:
    
    asterisk: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('asterisk'), 'exclude': lambda f: f is None }})  
    bestsellers_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('bestsellers_date'), 'exclude': lambda f: f is None }})  
    dagger: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('dagger'), 'exclude': lambda f: f is None }})  
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('display_name'), 'exclude': lambda f: f is None }})  
    list_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('list_name'), 'exclude': lambda f: f is None }})  
    primary_isbn10: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('primary_isbn10'), 'exclude': lambda f: f is None }})  
    primary_isbn13: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('primary_isbn13'), 'exclude': lambda f: f is None }})  
    published_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('published_date'), 'exclude': lambda f: f is None }})  
    rank: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('rank'), 'exclude': lambda f: f is None }})  
    ranks_last_week: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ranks_last_week'), 'exclude': lambda f: f is None }})  
    weeks_on_list: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('weeks_on_list'), 'exclude': lambda f: f is None }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GETListsBestSellersHistoryJSON200ApplicationJSONResultsReviews:
    
    article_chapter_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('article_chapter_link'), 'exclude': lambda f: f is None }})  
    book_review_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('book_review_link'), 'exclude': lambda f: f is None }})  
    first_chapter_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('first_chapter_link'), 'exclude': lambda f: f is None }})  
    sunday_review_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('sunday_review_link'), 'exclude': lambda f: f is None }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GETListsBestSellersHistoryJSON200ApplicationJSONResults:
    
    age_group: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('age_group'), 'exclude': lambda f: f is None }})  
    author: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('author'), 'exclude': lambda f: f is None }})  
    contributor: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('contributor'), 'exclude': lambda f: f is None }})  
    contributor_note: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('contributor_note'), 'exclude': lambda f: f is None }})  
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('description'), 'exclude': lambda f: f is None }})  
    isbns: Optional[list[GETListsBestSellersHistoryJSON200ApplicationJSONResultsIsbns]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('isbns'), 'exclude': lambda f: f is None }})  
    price: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('price'), 'exclude': lambda f: f is None }})  
    publisher: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('publisher'), 'exclude': lambda f: f is None }})  
    ranks_history: Optional[list[GETListsBestSellersHistoryJSON200ApplicationJSONResultsRanksHistory]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ranks_history'), 'exclude': lambda f: f is None }})  
    reviews: Optional[list[GETListsBestSellersHistoryJSON200ApplicationJSONResultsReviews]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('reviews'), 'exclude': lambda f: f is None }})  
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('title'), 'exclude': lambda f: f is None }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GETListsBestSellersHistoryJSON200ApplicationJSON:
    
    copyright: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('copyright'), 'exclude': lambda f: f is None }})  
    num_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('num_results'), 'exclude': lambda f: f is None }})  
    results: Optional[list[GETListsBestSellersHistoryJSON200ApplicationJSONResults]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('results'), 'exclude': lambda f: f is None }})  
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('status'), 'exclude': lambda f: f is None }})  
    

@dataclasses.dataclass
class GETListsBestSellersHistoryJSONResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    get_lists_best_sellers_history_json_200_application_json_object: Optional[GETListsBestSellersHistoryJSON200ApplicationJSON] = dataclasses.field(default=None)  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    