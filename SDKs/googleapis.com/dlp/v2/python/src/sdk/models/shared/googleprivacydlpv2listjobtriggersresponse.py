import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2jobtrigger as shared_googleprivacydlpv2jobtrigger


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2ListJobTriggersResponse:
    r"""GooglePrivacyDlpV2ListJobTriggersResponse
    Response message for ListJobTriggers.
    """
    
    job_triggers: Optional[list[shared_googleprivacydlpv2jobtrigger.GooglePrivacyDlpV2JobTrigger]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobTriggers') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
