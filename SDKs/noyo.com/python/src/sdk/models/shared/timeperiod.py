import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class TimePeriodUnitEnum(str, Enum):
    ANNUAL = "annual"
    MONTH = "month"
    SEMI_MONTHLY = "semi-monthly"


@dataclass_json
@dataclasses.dataclass
class TimePeriod:
    amount: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    unit: TimePeriodUnitEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    
