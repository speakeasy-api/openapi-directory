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
class GetInlineScriptTagPathParams:
    inline_script_tag_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'inlineScriptTagId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetInlineScriptTagSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    
class GetInlineScriptTag200ApplicationJSONInlineScriptTagDisplayScopeEnum(str, Enum):
    ALL = "all"
    THANKS_PAGE = "thanks_page"
    CART = "cart"

class GetInlineScriptTag200ApplicationJSONInlineScriptTagTriggerEventEnum(str, Enum):
    OBJECT_BUILDED = "object_builded"


@dataclass_json
@dataclasses.dataclass
class GetInlineScriptTag200ApplicationJSONInlineScriptTag:
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_id') }})
    display_scope: Optional[GetInlineScriptTag200ApplicationJSONInlineScriptTagDisplayScopeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_scope') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    make_date: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('make_date') }})
    oauth_application_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth_application_id') }})
    script: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script') }})
    trigger_event: Optional[GetInlineScriptTag200ApplicationJSONInlineScriptTagTriggerEventEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trigger_event') }})
    update_date: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('update_date') }})
    

@dataclass_json
@dataclasses.dataclass
class GetInlineScriptTag200ApplicationJSON:
    inline_script_tag: Optional[GetInlineScriptTag200ApplicationJSONInlineScriptTag] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inline_script_tag') }})
    

@dataclasses.dataclass
class GetInlineScriptTagRequest:
    path_params: GetInlineScriptTagPathParams = dataclasses.field()
    security: GetInlineScriptTagSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetInlineScriptTagResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_inline_script_tag_200_application_json_object: Optional[GetInlineScriptTag200ApplicationJSON] = dataclasses.field(default=None)
    
