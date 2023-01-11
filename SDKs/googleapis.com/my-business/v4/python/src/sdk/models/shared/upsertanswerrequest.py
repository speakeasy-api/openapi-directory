import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import answer as shared_answer


@dataclass_json
@dataclasses.dataclass
class UpsertAnswerRequest:
    r"""UpsertAnswerRequest
    Request message for QuestionsAndAnswers.UpsertAnswer
    """
    
    answer: Optional[shared_answer.Answer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answer') }})
    
