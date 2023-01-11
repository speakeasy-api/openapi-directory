import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import costestimate as shared_costestimate


@dataclass_json
@dataclasses.dataclass
class SkuCostEstimate:
    r"""SkuCostEstimate
    Estimated cost for usage on a SKU.
    """
    
    cost_estimate: Optional[shared_costestimate.CostEstimate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('costEstimate') }})
    sku: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    usage_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usageAmount') }})
    usage_unit: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usageUnit') }})
    
