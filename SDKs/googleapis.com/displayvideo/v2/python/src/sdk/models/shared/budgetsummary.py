import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import prismacpecode as shared_prismacpecode


@dataclass_json
@dataclasses.dataclass
class BudgetSummary:
    r"""BudgetSummary
    Summarized information of an individual campaign budget.
    """
    
    external_budget_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalBudgetId') }})
    pre_tax_amount_micros: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preTaxAmountMicros') }})
    prisma_cpe_code: Optional[shared_prismacpecode.PrismaCpeCode] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prismaCpeCode') }})
    tax_amount_micros: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxAmountMicros') }})
    total_amount_micros: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalAmountMicros') }})
    
