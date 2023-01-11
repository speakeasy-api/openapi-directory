import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import job as shared_job


@dataclass_json
@dataclasses.dataclass
class SubmitJobRequestInput:
    r"""SubmitJobRequestInput
    A request to submit a job.
    """
    
    job: Optional[shared_job.JobInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('job') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    
