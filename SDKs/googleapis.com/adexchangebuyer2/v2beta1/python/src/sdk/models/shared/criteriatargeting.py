import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CriteriaTargeting:
    r"""CriteriaTargeting
    Generic targeting used for targeting dimensions that contains a list of included and excluded numeric IDs.
    """
    
    excluded_criteria_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludedCriteriaIds') }})
    targeted_criteria_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetedCriteriaIds') }})
    
