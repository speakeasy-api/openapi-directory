import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import correctanswers as shared_correctanswers
from ..shared import feedback as shared_feedback


@dataclass_json
@dataclasses.dataclass
class Grading:
    r"""Grading
    Grading for a single question
    """
    
    correct_answers: Optional[shared_correctanswers.CorrectAnswers] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('correctAnswers') }})
    general_feedback: Optional[shared_feedback.Feedback] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('generalFeedback') }})
    point_value: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pointValue') }})
    when_right: Optional[shared_feedback.Feedback] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('whenRight') }})
    when_wrong: Optional[shared_feedback.Feedback] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('whenWrong') }})
    
