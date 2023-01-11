import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fixedorpercent as shared_fixedorpercent


@dataclass_json
@dataclasses.dataclass
class OsPolicyAssignmentRollout:
    r"""OsPolicyAssignmentRollout
    Message to configure the rollout at the zonal level for the OS policy assignment.
    """
    
    disruption_budget: Optional[shared_fixedorpercent.FixedOrPercent] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disruptionBudget') }})
    min_wait_duration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minWaitDuration') }})
    
