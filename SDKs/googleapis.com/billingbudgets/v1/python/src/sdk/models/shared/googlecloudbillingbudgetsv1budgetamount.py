import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googletypemoney as shared_googletypemoney


@dataclass_json
@dataclasses.dataclass
class GoogleCloudBillingBudgetsV1BudgetAmount:
    r"""GoogleCloudBillingBudgetsV1BudgetAmount
    The budgeted amount for each usage period.
    """
    
    last_period_amount: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastPeriodAmount') }})
    specified_amount: Optional[shared_googletypemoney.GoogleTypeMoney] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('specifiedAmount') }})
    
