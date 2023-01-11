import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import validated_user as shared_validated_user


@dataclass_json
@dataclasses.dataclass
class SaveWorkflowUserRequestBody:
    validated_users: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('validatedUsers') }})
    
class SaveWorkflowUser200ApplicationJSONActionEnum(str, Enum):
    ADD_USER = "addUser"

class SaveWorkflowUser200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class SaveWorkflowUser200ApplicationJSON:
    action: SaveWorkflowUser200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: shared_validated_user.ValidatedUser = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: SaveWorkflowUser200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class SaveWorkflowUserRequest:
    request: SaveWorkflowUserRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SaveWorkflowUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    save_workflow_user_200_application_json_object: Optional[SaveWorkflowUser200ApplicationJSON] = dataclasses.field(default=None)
    
