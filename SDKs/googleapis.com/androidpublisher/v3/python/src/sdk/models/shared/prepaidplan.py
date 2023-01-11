import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PrepaidPlan:
    r"""PrepaidPlan
    Information related to a prepaid plan.
    """
    
    allow_extend_after_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowExtendAfterTime') }})
    
