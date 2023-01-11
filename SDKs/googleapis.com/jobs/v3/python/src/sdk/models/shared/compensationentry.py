import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import money as shared_money
from ..shared import compensationrange as shared_compensationrange

class CompensationEntryTypeEnum(str, Enum):
    COMPENSATION_TYPE_UNSPECIFIED = "COMPENSATION_TYPE_UNSPECIFIED"
    BASE = "BASE"
    BONUS = "BONUS"
    SIGNING_BONUS = "SIGNING_BONUS"
    EQUITY = "EQUITY"
    PROFIT_SHARING = "PROFIT_SHARING"
    COMMISSIONS = "COMMISSIONS"
    TIPS = "TIPS"
    OTHER_COMPENSATION_TYPE = "OTHER_COMPENSATION_TYPE"

class CompensationEntryUnitEnum(str, Enum):
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
class CompensationEntry:
    r"""CompensationEntry
    A compensation entry that represents one component of compensation, such as base pay, bonus, or other compensation type. Annualization: One compensation entry can be annualized if - it contains valid amount or range. - and its expected_units_per_year is set or can be derived. Its annualized range is determined as (amount or range) times expected_units_per_year.
    """
    
    amount: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    expected_units_per_year: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expectedUnitsPerYear') }})
    range: Optional[shared_compensationrange.CompensationRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    type: Optional[CompensationEntryTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    unit: Optional[CompensationEntryUnitEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    
