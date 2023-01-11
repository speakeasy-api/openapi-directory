import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GetSystemInfo200ApplicationJSONActionEnum(str, Enum):
    GET_SYSTEM_INFO = "getSystemInfo"


@dataclass_json
@dataclasses.dataclass
class GetSystemInfo200ApplicationJSONData:
    r"""GetSystemInfo200ApplicationJSONData
    Information about the service
    """
    
    rudder: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rudder') }})
    
class GetSystemInfo200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class GetSystemInfo200ApplicationJSON:
    action: GetSystemInfo200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: GetSystemInfo200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: GetSystemInfo200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class GetSystemInfoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_system_info_200_application_json_object: Optional[GetSystemInfo200ApplicationJSON] = dataclasses.field(default=None)
    
