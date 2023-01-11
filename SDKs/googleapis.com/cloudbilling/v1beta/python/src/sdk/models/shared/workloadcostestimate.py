import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import skucostestimate as shared_skucostestimate
from ..shared import costestimate as shared_costestimate


@dataclass_json
@dataclasses.dataclass
class WorkloadCostEstimate:
    r"""WorkloadCostEstimate
    Estimated cost for a workload.
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    sku_cost_estimates: Optional[list[shared_skucostestimate.SkuCostEstimate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skuCostEstimates') }})
    workload_total_cost_estimate: Optional[shared_costestimate.CostEstimate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workloadTotalCostEstimate') }})
    
