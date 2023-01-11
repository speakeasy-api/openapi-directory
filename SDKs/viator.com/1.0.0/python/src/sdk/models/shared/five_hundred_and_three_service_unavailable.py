import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class FiveHundredAndThreeServiceUnavailableCodeEnum(str, Enum):
    SERVICE_UNAVAILABLE = "SERVICE_UNAVAILABLE"

class FiveHundredAndThreeServiceUnavailableMessageEnum(str, Enum):
    INTERNAL_SERVER_ERROR = "Internal server error"


@dataclass_json
@dataclasses.dataclass
class FiveHundredAndThreeServiceUnavailable:
    code: Optional[FiveHundredAndThreeServiceUnavailableCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: Optional[FiveHundredAndThreeServiceUnavailableMessageEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    timestamp: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    tracking_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingId') }})
    
