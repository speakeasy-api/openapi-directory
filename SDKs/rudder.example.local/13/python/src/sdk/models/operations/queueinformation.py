import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class QueueInformation200ApplicationJSONActionEnum(str, Enum):
    QUEUE_INFORMATION = "queueInformation"


@dataclass_json
@dataclasses.dataclass
class QueueInformation200ApplicationJSONData:
    r"""QueueInformation200ApplicationJSONData
    Information about the service
    """
    
    queue_max_size: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('queueMaxSize') }})
    queue_saturated: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('queueSaturated') }})
    
class QueueInformation200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class QueueInformation200ApplicationJSON:
    action: QueueInformation200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: QueueInformation200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: QueueInformation200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class QueueInformationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    queue_information_200_application_json_object: Optional[QueueInformation200ApplicationJSON] = dataclasses.field(default=None)
    
