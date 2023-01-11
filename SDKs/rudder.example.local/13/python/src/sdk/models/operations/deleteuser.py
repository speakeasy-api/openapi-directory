import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class DeleteUserPathParams:
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    
class DeleteUser200ApplicationJSONActionEnum(str, Enum):
    DELETE_USER = "deleteUser"


@dataclass_json
@dataclasses.dataclass
class DeleteUser200ApplicationJSONDataDeletedUser:
    username: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteUser200ApplicationJSONData:
    deleted_user: DeleteUser200ApplicationJSONDataDeletedUser = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deletedUser') }})
    
class DeleteUser200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class DeleteUser200ApplicationJSON:
    action: DeleteUser200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: DeleteUser200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: DeleteUser200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class DeleteUserRequest:
    path_params: DeleteUserPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_user_200_application_json_object: Optional[DeleteUser200ApplicationJSON] = dataclasses.field(default=None)
    
