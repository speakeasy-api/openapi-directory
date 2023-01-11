import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class NegativeKeywordListAssignedTargetingOptionDetails:
    r"""NegativeKeywordListAssignedTargetingOptionDetails
    Targeting details for negative keyword list. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST`.
    """
    
    negative_keyword_list_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('negativeKeywordListId') }})
    
