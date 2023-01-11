import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gradehistory as shared_gradehistory
from ..shared import statehistory as shared_statehistory


@dataclass_json
@dataclasses.dataclass
class SubmissionHistory:
    r"""SubmissionHistory
    The history of the submission. This currently includes state and grade histories.
    """
    
    grade_history: Optional[shared_gradehistory.GradeHistory] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gradeHistory') }})
    state_history: Optional[shared_statehistory.StateHistory] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateHistory') }})
    
