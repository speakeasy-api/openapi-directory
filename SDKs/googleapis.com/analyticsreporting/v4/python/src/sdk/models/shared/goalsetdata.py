import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import goaldata as shared_goaldata


@dataclass_json
@dataclasses.dataclass
class GoalSetData:
    r"""GoalSetData
    Represents a set of goals that were reached in an activity.
    """
    
    goals: Optional[list[shared_goaldata.GoalData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('goals') }})
    
