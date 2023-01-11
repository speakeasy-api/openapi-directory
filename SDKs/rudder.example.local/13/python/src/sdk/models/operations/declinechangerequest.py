import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import change_request as shared_change_request


@dataclasses.dataclass
class DeclineChangeRequestPathParams:
    change_request_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'changeRequestId', 'style': 'simple', 'explode': False }})
    
class DeclineChangeRequest200ApplicationJSONActionEnum(str, Enum):
    DECLINE_CHANGE_REQUEST = "declineChangeRequest"


@dataclass_json
@dataclasses.dataclass
class DeclineChangeRequest200ApplicationJSONData:
    rules: list[shared_change_request.ChangeRequest] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    
class DeclineChangeRequest200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class DeclineChangeRequest200ApplicationJSON:
    action: DeclineChangeRequest200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: DeclineChangeRequest200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: DeclineChangeRequest200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class DeclineChangeRequestRequest:
    path_params: DeclineChangeRequestPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeclineChangeRequestResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    decline_change_request_200_application_json_object: Optional[DeclineChangeRequest200ApplicationJSON] = dataclasses.field(default=None)
    
