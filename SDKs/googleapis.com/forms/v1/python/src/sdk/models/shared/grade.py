import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import feedback as shared_feedback


@dataclass_json
@dataclasses.dataclass
class Grade:
    r"""Grade
    Grade information associated with a respondent's answer to a question.
    """
    
    correct: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('correct') }})
    feedback: Optional[shared_feedback.Feedback] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feedback') }})
    score: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    
