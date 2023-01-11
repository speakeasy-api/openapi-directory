import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GetAuthinfo200ApplicationJSONAuthMethodEnum(str, Enum):
    USER_SESSION = "user_session"
    INTERNAL = "internal"
    STATIC_API_KEY = "static_api_key"


@dataclass_json
@dataclasses.dataclass
class GetAuthinfo200ApplicationJSONPermissions:
    mutate: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mutate') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAuthinfo200ApplicationJSON:
    api_key_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('api_key_id') }})
    auth_method: Optional[GetAuthinfo200ApplicationJSONAuthMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auth_method') }})
    authenticated: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authenticated') }})
    permissions: Optional[GetAuthinfo200ApplicationJSONPermissions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    user_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_id') }})
    

@dataclasses.dataclass
class GetAuthinfoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_authinfo_200_application_json_object: Optional[GetAuthinfo200ApplicationJSON] = dataclasses.field(default=None)
    
