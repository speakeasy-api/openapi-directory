import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class HooksGetActionEnum(str, Enum):
    READ = "read"


@dataclasses.dataclass
class HooksGetQueryParams:
    action: HooksGetActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'action', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class HooksGet200ApplicationJSONHooks:
    created: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    event_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_type') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    request_method: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_method') }})
    target_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_url') }})
    

@dataclass_json
@dataclasses.dataclass
class HooksGet200ApplicationJSON:
    hooks: Optional[list[HooksGet200ApplicationJSONHooks]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hooks') }})
    success: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    

@dataclasses.dataclass
class HooksGetRequest:
    query_params: HooksGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class HooksGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    hooks_get_200_application_json_object: Optional[HooksGet200ApplicationJSON] = dataclasses.field(default=None)
    
