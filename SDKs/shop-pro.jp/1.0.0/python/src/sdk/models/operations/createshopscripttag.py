import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security

class CreateShopScriptTagRequestBodyScriptTagDisplayScopeEnum(str, Enum):
    SHOP = "shop"
    THANKS_PAGE = "thanks_page"


@dataclass_json
@dataclasses.dataclass
class CreateShopScriptTagRequestBodyScriptTag:
    display_scope: Optional[CreateShopScriptTagRequestBodyScriptTagDisplayScopeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_scope') }})
    integrity: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrity') }})
    src: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('src') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateShopScriptTagRequestBody:
    script_tag: Optional[CreateShopScriptTagRequestBodyScriptTag] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script_tag') }})
    

@dataclasses.dataclass
class CreateShopScriptTagSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    
class CreateShopScriptTag200ApplicationJSONScriptTagDisplayScopeEnum(str, Enum):
    SHOP = "shop"
    THANKS_PAGE = "thanks_page"


@dataclass_json
@dataclasses.dataclass
class CreateShopScriptTag200ApplicationJSONScriptTag:
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_id') }})
    display_scope: Optional[CreateShopScriptTag200ApplicationJSONScriptTagDisplayScopeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_scope') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    integrity: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrity') }})
    make_date: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('make_date') }})
    oauth_application_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth_application_id') }})
    src: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('src') }})
    update_date: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('update_date') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateShopScriptTag200ApplicationJSON:
    script_tag: Optional[CreateShopScriptTag200ApplicationJSONScriptTag] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script_tag') }})
    

@dataclasses.dataclass
class CreateShopScriptTagRequest:
    security: CreateShopScriptTagSecurity = dataclasses.field()
    request: Optional[CreateShopScriptTagRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateShopScriptTagResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_shop_script_tag_200_application_json_object: Optional[CreateShopScriptTag200ApplicationJSON] = dataclasses.field(default=None)
    
