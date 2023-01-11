import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import users as shared_users

class AddUser200ApplicationJSONActionEnum(str, Enum):
    ADD_USER = "addUser"


@dataclass_json
@dataclasses.dataclass
class AddUser200ApplicationJSONDataAddedUser:
    password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    role: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    username: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    

@dataclass_json
@dataclasses.dataclass
class AddUser200ApplicationJSONData:
    added_user: AddUser200ApplicationJSONDataAddedUser = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('addedUser') }})
    
class AddUser200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class AddUser200ApplicationJSON:
    action: AddUser200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: AddUser200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: AddUser200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class AddUserRequest:
    request: shared_users.Users = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AddUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    add_user_200_application_json_object: Optional[AddUser200ApplicationJSON] = dataclasses.field(default=None)
    
