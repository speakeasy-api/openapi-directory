import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import alertfeedback as shared_alertfeedback


@dataclass_json
@dataclasses.dataclass
class ListAlertFeedbackResponse:
    r"""ListAlertFeedbackResponse
    Response message for an alert feedback listing request.
    """
    
    feedback: Optional[list[shared_alertfeedback.AlertFeedback]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feedback') }})
    
