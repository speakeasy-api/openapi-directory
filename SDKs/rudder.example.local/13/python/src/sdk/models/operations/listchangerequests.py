import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import change_request as shared_change_request

class ListChangeRequests200ApplicationJSONActionEnum(str, Enum):
    LIST_CHANGE_REQUESTS = "listChangeRequests"


@dataclass_json
@dataclasses.dataclass
class ListChangeRequests200ApplicationJSONData:
    rules: list[shared_change_request.ChangeRequest] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    
class ListChangeRequests200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class ListChangeRequests200ApplicationJSON:
    action: ListChangeRequests200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: ListChangeRequests200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: ListChangeRequests200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class ListChangeRequestsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_change_requests_200_application_json_object: Optional[ListChangeRequests200ApplicationJSON] = dataclasses.field(default=None)
    
