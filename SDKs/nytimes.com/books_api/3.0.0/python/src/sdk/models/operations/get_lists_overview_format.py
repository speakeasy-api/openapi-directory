import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security

class GetListsOverviewFormatFormatEnum(str, Enum):
    JSON = "json"
    JSONP = "jsonp"


@dataclasses.dataclass
class GetListsOverviewFormatPathParams:
    format: GetListsOverviewFormatFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetListsOverviewFormatQueryParams:
    api_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'api-key', 'style': 'form', 'explode': True }})
    published_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'published_date', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetListsOverviewFormatSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass_json
@dataclasses.dataclass
class GetListsOverviewFormat200ApplicationJSONResultsListsBooks:
    age_group: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('age_group') }})
    author: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('author') }})
    contributor: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contributor') }})
    contributor_note: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contributor_note') }})
    created_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_date') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    price: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    primary_isbn10: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary_isbn10') }})
    primary_isbn13: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary_isbn13') }})
    publisher: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisher') }})
    rank: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rank') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    updated_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_date') }})
    

@dataclass_json
@dataclasses.dataclass
class GetListsOverviewFormat200ApplicationJSONResultsLists:
    books: Optional[list[GetListsOverviewFormat200ApplicationJSONResultsListsBooks]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('books') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_name') }})
    list_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('list_id') }})
    list_image: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('list_image') }})
    list_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('list_name') }})
    updated: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated') }})
    

@dataclass_json
@dataclasses.dataclass
class GetListsOverviewFormat200ApplicationJSONResults:
    bestsellers_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bestsellers_date') }})
    lists: Optional[list[GetListsOverviewFormat200ApplicationJSONResultsLists]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lists') }})
    published_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('published_date') }})
    

@dataclass_json
@dataclasses.dataclass
class GetListsOverviewFormat200ApplicationJSON:
    copyright: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyright') }})
    num_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_results') }})
    results: Optional[GetListsOverviewFormat200ApplicationJSONResults] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclasses.dataclass
class GetListsOverviewFormatRequest:
    path_params: GetListsOverviewFormatPathParams = dataclasses.field()
    query_params: GetListsOverviewFormatQueryParams = dataclasses.field()
    security: GetListsOverviewFormatSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetListsOverviewFormatResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_lists_overview_format_200_application_json_object: Optional[GetListsOverviewFormat200ApplicationJSON] = dataclasses.field(default=None)
    
