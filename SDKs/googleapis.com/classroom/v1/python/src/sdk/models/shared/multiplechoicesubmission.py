import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class MultipleChoiceSubmission:
    r"""MultipleChoiceSubmission
    Student work for a multiple-choice question.
    """
    
    answer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answer') }})
    
