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
class UpdateScriptTagPathParams:
    script_tag_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'scriptTagId', 'style': 'simple', 'explode': False }})
    
class UpdateScriptTagRequestBodyScriptTagDisplayScopeEnum(str, Enum):
    ALL = "all"
    SHOP = "shop"
    THANKS_PAGE = "thanks_page"
    CART = "cart"


@dataclass_json
@dataclasses.dataclass
class UpdateScriptTagRequestBodyScriptTag:
    display_scope: Optional[UpdateScriptTagRequestBodyScriptTagDisplayScopeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_scope') }})
    src: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('src') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateScriptTagRequestBody:
    script_tag: Optional[UpdateScriptTagRequestBodyScriptTag] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script_tag') }})
    

@dataclasses.dataclass
class UpdateScriptTagSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    
class UpdateScriptTag200ApplicationJSONScriptTagDisplayScopeEnum(str, Enum):
    ALL = "all"
    SHOP = "shop"
    THANKS_PAGE = "thanks_page"
    CART = "cart"


@dataclass_json
@dataclasses.dataclass
class UpdateScriptTag200ApplicationJSONScriptTag:
    display_scope: Optional[UpdateScriptTag200ApplicationJSONScriptTagDisplayScopeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_scope') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    make_date: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('make_date') }})
    src: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('src') }})
    update_date: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('update_date') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateScriptTag200ApplicationJSON:
    script_tag: Optional[UpdateScriptTag200ApplicationJSONScriptTag] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script_tag') }})
    

@dataclasses.dataclass
class UpdateScriptTagRequest:
    path_params: UpdateScriptTagPathParams = dataclasses.field()
    security: UpdateScriptTagSecurity = dataclasses.field()
    request: Optional[UpdateScriptTagRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateScriptTagResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_script_tag_200_application_json_object: Optional[UpdateScriptTag200ApplicationJSON] = dataclasses.field(default=None)
    
