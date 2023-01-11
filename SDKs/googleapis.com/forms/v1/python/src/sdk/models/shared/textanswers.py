import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import textanswer as shared_textanswer


@dataclass_json
@dataclasses.dataclass
class TextAnswers:
    r"""TextAnswers
    A question's answers as text.
    """
    
    answers: Optional[list[shared_textanswer.TextAnswer]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answers') }})
    
