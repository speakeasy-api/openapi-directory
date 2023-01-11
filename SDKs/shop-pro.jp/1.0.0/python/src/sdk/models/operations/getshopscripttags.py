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
class GetShopScriptTagsSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    
class GetShopScriptTags200ApplicationJSONScriptTagsDisplayScopeEnum(str, Enum):
    SHOP = "shop"
    THANKS_PAGE = "thanks_page"


@dataclass_json
@dataclasses.dataclass
class GetShopScriptTags200ApplicationJSONScriptTags:
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_id') }})
    display_scope: Optional[GetShopScriptTags200ApplicationJSONScriptTagsDisplayScopeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_scope') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    integrity: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrity') }})
    make_date: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('make_date') }})
    oauth_application_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth_application_id') }})
    src: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('src') }})
    update_date: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('update_date') }})
    

@dataclass_json
@dataclasses.dataclass
class GetShopScriptTags200ApplicationJSON:
    script_tags: Optional[list[GetShopScriptTags200ApplicationJSONScriptTags]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script_tags') }})
    

@dataclasses.dataclass
class GetShopScriptTagsRequest:
    security: GetShopScriptTagsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetShopScriptTagsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_shop_script_tags_200_application_json_object: Optional[GetShopScriptTags200ApplicationJSON] = dataclasses.field(default=None)
    
