import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cancelsurveyresult as shared_cancelsurveyresult


@dataclass_json
@dataclasses.dataclass
class UserInitiatedCancellation:
    r"""UserInitiatedCancellation
    Information specific to cancellations initiated by users.
    """
    
    cancel_survey_result: Optional[shared_cancelsurveyresult.CancelSurveyResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancelSurveyResult') }})
    cancel_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancelTime') }})
    
