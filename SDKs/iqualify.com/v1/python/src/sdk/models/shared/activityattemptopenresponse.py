import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import activityattemptopenresponsefeedback as shared_activityattemptopenresponsefeedback
from ..shared import activityattemptopenresponsefiles as shared_activityattemptopenresponsefiles


@dataclass_json
@dataclasses.dataclass
class ActivityAttemptOpenResponse:
    activity_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activityId') }})
    activity_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activityType') }})
    feedback: Optional[shared_activityattemptopenresponsefeedback.ActivityAttemptOpenResponseFeedback] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feedback') }})
    learner_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('learnerEmail') }})
    offering_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offeringId') }})
    response_text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseText') }})
    uploaded_files: Optional[shared_activityattemptopenresponsefiles.ActivityAttemptOpenResponseFiles] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uploadedFiles') }})
    
