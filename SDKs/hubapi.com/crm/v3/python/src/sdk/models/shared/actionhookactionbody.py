import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import actionconfirmationbody as shared_actionconfirmationbody

class ActionHookActionBodyHTTPMethodEnum(str, Enum):
    CONNECT = "CONNECT"
    DELETE = "DELETE"
    GET = "GET"
    HEAD = "HEAD"
    OPTIONS = "OPTIONS"
    PATCH = "PATCH"
    POST = "POST"
    PUT = "PUT"
    TRACE = "TRACE"

class ActionHookActionBodyTypeEnum(str, Enum):
    ACTION_HOOK = "ACTION_HOOK"


@dataclass_json
@dataclasses.dataclass
class ActionHookActionBody:
    http_method: ActionHookActionBodyHTTPMethodEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpMethod') }})
    property_names_included: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('propertyNamesIncluded') }})
    type: ActionHookActionBodyTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    confirmation: Optional[shared_actionconfirmationbody.ActionConfirmationBody] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confirmation') }})
    label: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    
