import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PurgeSoftware200ApplicationJSONActionEnum(str, Enum):
    PURGE_SOFTWARE = "purgeSoftware"

class PurgeSoftware200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class PurgeSoftware200ApplicationJSON:
    action: PurgeSoftware200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: PurgeSoftware200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class PurgeSoftwareResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    purge_software_200_application_json_object: Optional[PurgeSoftware200ApplicationJSON] = dataclasses.field(default=None)
    
