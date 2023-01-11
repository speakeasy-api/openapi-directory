import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import evaluation as shared_evaluation


@dataclass_json
@dataclasses.dataclass
class ListEvaluationsResponse:
    r"""ListEvaluationsResponse
    Message for response to listing Evaluations
    """
    
    evaluations: Optional[list[shared_evaluation.Evaluation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluations') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    unreachable: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
