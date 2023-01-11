import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import segmentcostestimate as shared_segmentcostestimate
from ..shared import sku as shared_sku


@dataclass_json
@dataclasses.dataclass
class CostEstimationResult:
    r"""CostEstimationResult
    The result of a estimating the costs of a `CostScenario`.
    """
    
    currency_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    segment_cost_estimates: Optional[list[shared_segmentcostestimate.SegmentCostEstimate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('segmentCostEstimates') }})
    skus: Optional[list[shared_sku.Sku]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skus') }})
    
