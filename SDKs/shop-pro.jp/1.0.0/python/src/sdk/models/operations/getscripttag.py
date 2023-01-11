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
class GetScriptTagPathParams:
    script_tag_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'scriptTagId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetScriptTagSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    
class GetScriptTag200ApplicationJSONScriptTagDisplayScopeEnum(str, Enum):
    ALL = "all"
    SHOP = "shop"
    THANKS_PAGE = "thanks_page"
    CART = "cart"


@dataclass_json
@dataclasses.dataclass
class GetScriptTag200ApplicationJSONScriptTag:
    display_scope: Optional[GetScriptTag200ApplicationJSONScriptTagDisplayScopeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_scope') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    make_date: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('make_date') }})
    src: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('src') }})
    update_date: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('update_date') }})
    

@dataclass_json
@dataclasses.dataclass
class GetScriptTag200ApplicationJSON:
    script_tag: Optional[GetScriptTag200ApplicationJSONScriptTag] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script_tag') }})
    

@dataclasses.dataclass
class GetScriptTagRequest:
    path_params: GetScriptTagPathParams = dataclasses.field()
    security: GetScriptTagSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetScriptTagResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_script_tag_200_application_json_object: Optional[GetScriptTag200ApplicationJSON] = dataclasses.field(default=None)
    
