import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import change_request as shared_change_request


@dataclasses.dataclass
class ChangeRequestDetailsPathParams:
    change_request_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'changeRequestId', 'style': 'simple', 'explode': False }})
    
class ChangeRequestDetails200ApplicationJSONActionEnum(str, Enum):
    CHANGE_REQUEST_DETAILS = "changeRequestDetails"


@dataclass_json
@dataclasses.dataclass
class ChangeRequestDetails200ApplicationJSONData:
    rules: list[shared_change_request.ChangeRequest] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    
class ChangeRequestDetails200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class ChangeRequestDetails200ApplicationJSON:
    action: ChangeRequestDetails200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: ChangeRequestDetails200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: ChangeRequestDetails200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class ChangeRequestDetailsRequest:
    path_params: ChangeRequestDetailsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ChangeRequestDetailsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    change_request_details_200_application_json_object: Optional[ChangeRequestDetails200ApplicationJSON] = dataclasses.field(default=None)
    
