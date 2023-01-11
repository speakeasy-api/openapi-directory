import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SubExchangeAssignedTargetingOptionDetails:
    r"""SubExchangeAssignedTargetingOptionDetails
    Details for assigned sub-exchange targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_SUB_EXCHANGE`.
    """
    
    targeting_option_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetingOptionId') }})
    
