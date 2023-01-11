import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fixedorpercent as shared_fixedorpercent

class PatchRolloutModeEnum(str, Enum):
    MODE_UNSPECIFIED = "MODE_UNSPECIFIED"
    ZONE_BY_ZONE = "ZONE_BY_ZONE"
    CONCURRENT_ZONES = "CONCURRENT_ZONES"


@dataclass_json
@dataclasses.dataclass
class PatchRollout:
    r"""PatchRollout
    Patch rollout configuration specifications. Contains details on the concurrency control when applying patch(es) to all targeted VMs.
    """
    
    disruption_budget: Optional[shared_fixedorpercent.FixedOrPercent] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disruptionBudget') }})
    mode: Optional[PatchRolloutModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    
