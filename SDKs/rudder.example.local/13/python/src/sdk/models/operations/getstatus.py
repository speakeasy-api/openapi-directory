import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GetStatus200ApplicationJSONActionEnum(str, Enum):
    GET_STATUS = "getStatus"

class GetStatus200ApplicationJSONDataGlobalEnum(str, Enum):
    OK = "OK"


@dataclass_json
@dataclasses.dataclass
class GetStatus200ApplicationJSONData:
    r"""GetStatus200ApplicationJSONData
    Status of the service
    """
    
    global_: Optional[GetStatus200ApplicationJSONDataGlobalEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('global') }})
    
class GetStatus200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class GetStatus200ApplicationJSON:
    action: GetStatus200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: GetStatus200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: GetStatus200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class GetStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_status_200_application_json_object: Optional[GetStatus200ApplicationJSON] = dataclasses.field(default=None)
    
