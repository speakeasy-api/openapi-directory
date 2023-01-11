import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security

class GetListsNamesFormatFormatEnum(str, Enum):
    JSON = "json"
    JSONP = "jsonp"


@dataclasses.dataclass
class GetListsNamesFormatPathParams:
    format: GetListsNamesFormatFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetListsNamesFormatQueryParams:
    api_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'api-key', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetListsNamesFormatSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass_json
@dataclasses.dataclass
class GetListsNamesFormat200ApplicationJSONResults:
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_name') }})
    list_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('list_name') }})
    list_name_encoded: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('list_name_encoded') }})
    newest_published_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newest_published_date') }})
    oldest_published_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oldest_published_date') }})
    updated: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated') }})
    

@dataclass_json
@dataclasses.dataclass
class GetListsNamesFormat200ApplicationJSON:
    copyright: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyright') }})
    num_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_results') }})
    results: Optional[list[GetListsNamesFormat200ApplicationJSONResults]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclasses.dataclass
class GetListsNamesFormatRequest:
    path_params: GetListsNamesFormatPathParams = dataclasses.field()
    query_params: GetListsNamesFormatQueryParams = dataclasses.field()
    security: GetListsNamesFormatSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetListsNamesFormatResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_lists_names_format_200_application_json_object: Optional[GetListsNamesFormat200ApplicationJSON] = dataclasses.field(default=None)
    
