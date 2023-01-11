import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import commitmentcostestimate as shared_commitmentcostestimate
from ..shared import estimationtimepoint as shared_estimationtimepoint
from ..shared import costestimate as shared_costestimate
from ..shared import workloadcostestimate as shared_workloadcostestimate


@dataclass_json
@dataclasses.dataclass
class SegmentCostEstimate:
    r"""SegmentCostEstimate
    Workload cost estimates for a single time segment.
    """
    
    commitment_cost_estimates: Optional[list[shared_commitmentcostestimate.CommitmentCostEstimate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commitmentCostEstimates') }})
    segment_start_time: Optional[shared_estimationtimepoint.EstimationTimePoint] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('segmentStartTime') }})
    segment_total_cost_estimate: Optional[shared_costestimate.CostEstimate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('segmentTotalCostEstimate') }})
    workload_cost_estimates: Optional[list[shared_workloadcostestimate.WorkloadCostEstimate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workloadCostEstimates') }})
    
