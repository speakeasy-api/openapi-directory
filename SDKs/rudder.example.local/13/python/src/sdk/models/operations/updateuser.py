import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import users as shared_users


@dataclasses.dataclass
class UpdateUserPathParams:
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    
class UpdateUser200ApplicationJSONActionEnum(str, Enum):
    UPDATE_USER = "updateUser"


@dataclass_json
@dataclasses.dataclass
class UpdateUser200ApplicationJSONDataUpdatedUser:
    password: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    role: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    username: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateUser200ApplicationJSONData:
    updated_user: UpdateUser200ApplicationJSONDataUpdatedUser = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedUser') }})
    
class UpdateUser200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class UpdateUser200ApplicationJSON:
    action: UpdateUser200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: UpdateUser200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: UpdateUser200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class UpdateUserRequest:
    path_params: UpdateUserPathParams = dataclasses.field()
    request: shared_users.Users = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_user_200_application_json_object: Optional[UpdateUser200ApplicationJSON] = dataclasses.field(default=None)
    
