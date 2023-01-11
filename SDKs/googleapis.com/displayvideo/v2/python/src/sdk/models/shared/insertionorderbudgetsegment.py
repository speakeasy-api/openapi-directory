import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import daterange as shared_daterange


@dataclass_json
@dataclasses.dataclass
class InsertionOrderBudgetSegment:
    r"""InsertionOrderBudgetSegment
    Settings that control the budget of a single budget segment.
    """
    
    budget_amount_micros: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('budgetAmountMicros') }})
    campaign_budget_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaignBudgetId') }})
    date_range: Optional[shared_daterange.DateRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateRange') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    
