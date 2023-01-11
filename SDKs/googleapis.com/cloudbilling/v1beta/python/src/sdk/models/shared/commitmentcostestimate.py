import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import costestimate as shared_costestimate
from ..shared import skucostestimate as shared_skucostestimate


@dataclass_json
@dataclasses.dataclass
class CommitmentCostEstimate:
    r"""CommitmentCostEstimate
    Estimated cost for a commitment.
    """
    
    commitment_total_cost_estimate: Optional[shared_costestimate.CostEstimate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commitmentTotalCostEstimate') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    sku_cost_estimates: Optional[list[shared_skucostestimate.SkuCostEstimate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skuCostEstimates') }})
    
