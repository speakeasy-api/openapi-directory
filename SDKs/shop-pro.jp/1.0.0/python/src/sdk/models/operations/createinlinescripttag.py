import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security

class CreateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum(str, Enum):
    ALL = "all"
    THANKS_PAGE = "thanks_page"
    CART = "cart"

class CreateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnum(str, Enum):
    OBJECT_BUILDED = "object_builded"


@dataclass_json
@dataclasses.dataclass
class CreateInlineScriptTagRequestBodyInlineScriptTag:
    display_scope: Optional[CreateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_scope') }})
    script: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script') }})
    trigger_event: Optional[CreateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trigger_event') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateInlineScriptTagRequestBody:
    inline_script_tag: Optional[CreateInlineScriptTagRequestBodyInlineScriptTag] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inline_script_tag') }})
    

@dataclasses.dataclass
class CreateInlineScriptTagSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    
class CreateInlineScriptTag201ApplicationJSONInlineScriptTagDisplayScopeEnum(str, Enum):
    ALL = "all"
    THANKS_PAGE = "thanks_page"
    CART = "cart"

class CreateInlineScriptTag201ApplicationJSONInlineScriptTagTriggerEventEnum(str, Enum):
    OBJECT_BUILDED = "object_builded"


@dataclass_json
@dataclasses.dataclass
class CreateInlineScriptTag201ApplicationJSONInlineScriptTag:
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_id') }})
    display_scope: Optional[CreateInlineScriptTag201ApplicationJSONInlineScriptTagDisplayScopeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_scope') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    make_date: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('make_date') }})
    oauth_application_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth_application_id') }})
    script: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script') }})
    trigger_event: Optional[CreateInlineScriptTag201ApplicationJSONInlineScriptTagTriggerEventEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trigger_event') }})
    update_date: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('update_date') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateInlineScriptTag201ApplicationJSON:
    inline_script_tag: Optional[CreateInlineScriptTag201ApplicationJSONInlineScriptTag] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inline_script_tag') }})
    

@dataclasses.dataclass
class CreateInlineScriptTagRequest:
    security: CreateInlineScriptTagSecurity = dataclasses.field()
    request: Optional[CreateInlineScriptTagRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateInlineScriptTagResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_inline_script_tag_201_application_json_object: Optional[CreateInlineScriptTag201ApplicationJSON] = dataclasses.field(default=None)
    
