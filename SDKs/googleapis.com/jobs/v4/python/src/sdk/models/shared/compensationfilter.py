import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import compensationrange as shared_compensationrange

class CompensationFilterTypeEnum(str, Enum):
    FILTER_TYPE_UNSPECIFIED = "FILTER_TYPE_UNSPECIFIED"
    UNIT_ONLY = "UNIT_ONLY"
    UNIT_AND_AMOUNT = "UNIT_AND_AMOUNT"
    ANNUALIZED_BASE_AMOUNT = "ANNUALIZED_BASE_AMOUNT"
    ANNUALIZED_TOTAL_AMOUNT = "ANNUALIZED_TOTAL_AMOUNT"

class CompensationFilterUnitsEnum(str, Enum):
    COMPENSATION_UNIT_UNSPECIFIED = "COMPENSATION_UNIT_UNSPECIFIED"
    HOURLY = "HOURLY"
    DAILY = "DAILY"
    WEEKLY = "WEEKLY"
    MONTHLY = "MONTHLY"
    YEARLY = "YEARLY"
    ONE_TIME = "ONE_TIME"
    OTHER_COMPENSATION_UNIT = "OTHER_COMPENSATION_UNIT"


@dataclass_json
@dataclasses.dataclass
class CompensationFilter:
    r"""CompensationFilter
    Filter on job compensation type and amount.
    """
    
    include_jobs_with_unspecified_compensation_range: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeJobsWithUnspecifiedCompensationRange') }})
    range: Optional[shared_compensationrange.CompensationRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    type: Optional[CompensationFilterTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    units: Optional[list[CompensationFilterUnitsEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('units') }})
    
