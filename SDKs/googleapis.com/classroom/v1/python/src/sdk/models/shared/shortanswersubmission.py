import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ShortAnswerSubmission:
    r"""ShortAnswerSubmission
    Student work for a short answer question.
    """
    
    answer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answer') }})
    
