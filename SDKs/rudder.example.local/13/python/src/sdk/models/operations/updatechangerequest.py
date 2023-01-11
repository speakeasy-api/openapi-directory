import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import change_request as shared_change_request


@dataclasses.dataclass
class UpdateChangeRequestPathParams:
    change_request_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'changeRequestId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateChangeRequestRequestBody:
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
class UpdateChangeRequest200ApplicationJSONActionEnum(str, Enum):
    UPDATE_CHANGE_REQUEST = "updateChangeRequest"


@dataclass_json
@dataclasses.dataclass
class UpdateChangeRequest200ApplicationJSONData:
    rules: list[shared_change_request.ChangeRequest] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    
class UpdateChangeRequest200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class UpdateChangeRequest200ApplicationJSON:
    action: UpdateChangeRequest200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: UpdateChangeRequest200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: UpdateChangeRequest200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class UpdateChangeRequestRequest:
    path_params: UpdateChangeRequestPathParams = dataclasses.field()
    request: UpdateChangeRequestRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateChangeRequestResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_change_request_200_application_json_object: Optional[UpdateChangeRequest200ApplicationJSON] = dataclasses.field(default=None)
    
