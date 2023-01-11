import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import targetingrulescope as shared_targetingrulescope


@dataclass_json
@dataclasses.dataclass
class UpgradeTargetingRule:
    r"""UpgradeTargetingRule
    Represents a targeting rule of the form: User currently has {scope} [with billing period {billing_period}].
    """
    
    billing_period_duration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingPeriodDuration') }})
    once_per_user: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oncePerUser') }})
    scope: Optional[shared_targetingrulescope.TargetingRuleScope] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    
