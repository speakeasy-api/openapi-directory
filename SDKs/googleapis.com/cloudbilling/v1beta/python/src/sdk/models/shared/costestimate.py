import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import creditestimate as shared_creditestimate
from ..shared import money as shared_money


@dataclass_json
@dataclasses.dataclass
class CostEstimate:
    r"""CostEstimate
    An estimated cost.
    """
    
    credit_estimates: Optional[list[shared_creditestimate.CreditEstimate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditEstimates') }})
    net_cost_estimate: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('netCostEstimate') }})
    pre_credit_cost_estimate: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preCreditCostEstimate') }})
    
