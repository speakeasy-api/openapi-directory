import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PaySchedulePaySchedulePayFrequencyEnum(str, Enum):
    WEEKLY = "Weekly"
    MONTHLY = "Monthly"
    TWO_WEEKLY = "TwoWeekly"
    FOUR_WEEKLY = "FourWeekly"
    YEARLY = "Yearly"


@dataclass_json
@dataclasses.dataclass
class PaySchedulePaySchedule:
    meta_data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetaData') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    pay_frequency: Optional[PaySchedulePaySchedulePayFrequencyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PayFrequency') }})
    

@dataclass_json
@dataclasses.dataclass
class PaySchedule:
    pay_schedule: Optional[PaySchedulePaySchedule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaySchedule') }})
    
