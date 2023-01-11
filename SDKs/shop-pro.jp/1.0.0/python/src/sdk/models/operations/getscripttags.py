import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetScriptTagsSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    
class GetScriptTags200ApplicationJSONScriptTagsDisplayScopeEnum(str, Enum):
    ALL = "all"
    SHOP = "shop"
    THANKS_PAGE = "thanks_page"
    CART = "cart"


@dataclass_json
@dataclasses.dataclass
class GetScriptTags200ApplicationJSONScriptTags:
    display_scope: Optional[GetScriptTags200ApplicationJSONScriptTagsDisplayScopeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_scope') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    make_date: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('make_date') }})
    src: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('src') }})
    update_date: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('update_date') }})
    

@dataclass_json
@dataclasses.dataclass
class GetScriptTags200ApplicationJSON:
    script_tags: Optional[list[GetScriptTags200ApplicationJSONScriptTags]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script_tags') }})
    

@dataclasses.dataclass
class GetScriptTagsRequest:
    security: GetScriptTagsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetScriptTagsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_script_tags_200_application_json_object: Optional[GetScriptTags200ApplicationJSON] = dataclasses.field(default=None)
    
