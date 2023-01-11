import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import timeperiod as shared_timeperiod

class RateModelCoverageLevelEnum(str, Enum):
    CHILD = "Child"
    EE = "EE"
    EE_PLUS_1 = "EE+1"
    EE_PLUS_CHILD = "EE+Child"
    EE_PLUS_CHILDREN = "EE+Children"
    EE_PLUS_SPOUSE = "EE+Spouse"
    FAMILY = "Family"
    PMPM = "PMPM"
    SPOUSE = "Spouse"


@dataclass_json
@dataclasses.dataclass
class RateModel:
    amount: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    coverage_level: RateModelCoverageLevelEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('coverage_level') }})
    period: shared_timeperiod.TimePeriod = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('period') }})
    
