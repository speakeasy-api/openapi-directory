import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import validated_user as shared_validated_user

class ListUsers200ApplicationJSONActionEnum(str, Enum):
    LIST_USERS = "listUsers"

class ListUsers200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class ListUsers200ApplicationJSON:
    action: ListUsers200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: list[shared_validated_user.ValidatedUser] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: ListUsers200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class ListUsersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_users_200_application_json_object: Optional[ListUsers200ApplicationJSON] = dataclasses.field(default=None)
    
