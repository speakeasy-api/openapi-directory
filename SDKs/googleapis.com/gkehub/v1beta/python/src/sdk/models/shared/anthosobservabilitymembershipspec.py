import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AnthosObservabilityMembershipSpec:
    r"""AnthosObservabilityMembershipSpec
    **Anthosobservability**: Per-Membership Feature spec.
    """
    
    do_not_optimize_metrics: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doNotOptimizeMetrics') }})
    enable_stackdriver_on_applications: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableStackdriverOnApplications') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
