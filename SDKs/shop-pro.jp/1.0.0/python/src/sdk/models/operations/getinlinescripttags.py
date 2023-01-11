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
class GetInlineScriptTagsSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    
class GetInlineScriptTags200ApplicationJSONInlineScriptTagsDisplayScopeEnum(str, Enum):
    ALL = "all"
    THANKS_PAGE = "thanks_page"
    CART = "cart"

class GetInlineScriptTags200ApplicationJSONInlineScriptTagsTriggerEventEnum(str, Enum):
    OBJECT_BUILDED = "object_builded"


@dataclass_json
@dataclasses.dataclass
class GetInlineScriptTags200ApplicationJSONInlineScriptTags:
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_id') }})
    display_scope: Optional[GetInlineScriptTags200ApplicationJSONInlineScriptTagsDisplayScopeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_scope') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    make_date: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('make_date') }})
    oauth_application_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth_application_id') }})
    script: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script') }})
    trigger_event: Optional[GetInlineScriptTags200ApplicationJSONInlineScriptTagsTriggerEventEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trigger_event') }})
    update_date: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('update_date') }})
    

@dataclass_json
@dataclasses.dataclass
class GetInlineScriptTags200ApplicationJSON:
    inline_script_tags: Optional[list[GetInlineScriptTags200ApplicationJSONInlineScriptTags]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inline_script_tags') }})
    

@dataclasses.dataclass
class GetInlineScriptTagsRequest:
    security: GetInlineScriptTagsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetInlineScriptTagsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_inline_script_tags_200_application_json_object: Optional[GetInlineScriptTags200ApplicationJSON] = dataclasses.field(default=None)
    
