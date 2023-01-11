import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class RemoveValidatedUserPathParams:
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    
class RemoveValidatedUser200ApplicationJSONActionEnum(str, Enum):
    LIST_USERS = "listUsers"

class RemoveValidatedUser200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class RemoveValidatedUser200ApplicationJSON:
    action: RemoveValidatedUser200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: RemoveValidatedUser200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class RemoveValidatedUserRequest:
    path_params: RemoveValidatedUserPathParams = dataclasses.field()
    

@dataclasses.dataclass
class RemoveValidatedUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    remove_validated_user_200_application_json_object: Optional[RemoveValidatedUser200ApplicationJSON] = dataclasses.field(default=None)
    
