import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2jobtrigger as shared_googleprivacydlpv2jobtrigger


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2CreateJobTriggerRequestInput:
    r"""GooglePrivacyDlpV2CreateJobTriggerRequestInput
    Request message for CreateJobTrigger.
    """
    
    job_trigger: Optional[shared_googleprivacydlpv2jobtrigger.GooglePrivacyDlpV2JobTriggerInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobTrigger') }})
    location_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationId') }})
    trigger_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerId') }})
    
