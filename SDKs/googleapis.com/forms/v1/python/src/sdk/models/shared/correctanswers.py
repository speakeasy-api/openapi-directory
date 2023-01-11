import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import correctanswer as shared_correctanswer


@dataclass_json
@dataclasses.dataclass
class CorrectAnswers:
    r"""CorrectAnswers
    The answer key for a question.
    """
    
    answers: Optional[list[shared_correctanswer.CorrectAnswer]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answers') }})
    
