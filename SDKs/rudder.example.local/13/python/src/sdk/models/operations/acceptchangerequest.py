import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import change_request as shared_change_request


@dataclasses.dataclass
class AcceptChangeRequestPathParams:
    change_request_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'changeRequestId', 'style': 'simple', 'explode': False }})
    
class AcceptChangeRequestRequestBodyStatusEnum(str, Enum):
    PENDING_DEPLOYMENT = "pending deployment"
    DEPLOYED = "deployed"


@dataclass_json
@dataclasses.dataclass
class AcceptChangeRequestRequestBody:
    status: Optional[AcceptChangeRequestRequestBodyStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
class AcceptChangeRequest200ApplicationJSONActionEnum(str, Enum):
    ACCEPT_CHANGE_REQUEST = "acceptChangeRequest"


@dataclass_json
@dataclasses.dataclass
class AcceptChangeRequest200ApplicationJSONData:
    rules: list[shared_change_request.ChangeRequest] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    
class AcceptChangeRequest200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class AcceptChangeRequest200ApplicationJSON:
    action: AcceptChangeRequest200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: AcceptChangeRequest200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: AcceptChangeRequest200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class AcceptChangeRequestRequest:
    path_params: AcceptChangeRequestPathParams = dataclasses.field()
    request: AcceptChangeRequestRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AcceptChangeRequestResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    accept_change_request_200_application_json_object: Optional[AcceptChangeRequest200ApplicationJSON] = dataclasses.field(default=None)
    
