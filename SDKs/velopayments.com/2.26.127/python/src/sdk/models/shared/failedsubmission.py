import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import failedpayee as shared_failedpayee


@dataclass_json
@dataclasses.dataclass
class FailedSubmission:
    failed_submission: Optional[shared_failedpayee.FailedPayee] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failedSubmission') }})
    failure_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureMessage') }})
    
