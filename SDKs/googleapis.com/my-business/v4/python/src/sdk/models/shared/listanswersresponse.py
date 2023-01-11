import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import answer as shared_answer


@dataclass_json
@dataclasses.dataclass
class ListAnswersResponse:
    r"""ListAnswersResponse
    Response message for QuestionsAndAnswers.ListAnswers
    """
    
    answers: Optional[list[shared_answer.Answer]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answers') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    total_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSize') }})
    
