import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class MultipleChoiceQuestion:
    r"""MultipleChoiceQuestion
    Additional details for multiple-choice questions.
    """
    
    choices: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('choices') }})
    
