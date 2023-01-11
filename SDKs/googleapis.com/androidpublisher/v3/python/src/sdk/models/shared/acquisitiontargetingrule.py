import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import targetingrulescope as shared_targetingrulescope


@dataclass_json
@dataclasses.dataclass
class AcquisitionTargetingRule:
    r"""AcquisitionTargetingRule
    Represents a targeting rule of the form: User never had {scope} before.
    """
    
    scope: Optional[shared_targetingrulescope.TargetingRuleScope] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    
