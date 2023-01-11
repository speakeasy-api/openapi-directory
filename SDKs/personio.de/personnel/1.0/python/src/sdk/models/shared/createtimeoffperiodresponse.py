import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CreateTimeOffPeriodResponseDataTypeEnum(str, Enum):
    TIME_OFF_PERIOD = "TimeOffPeriod"


@dataclass_json
@dataclasses.dataclass
class CreateTimeOffPeriodResponseData:
    attributes: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    type: Optional[CreateTimeOffPeriodResponseDataTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateTimeOffPeriodResponse:
    data: CreateTimeOffPeriodResponseData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    success: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    
