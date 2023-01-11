import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import job as shared_job


@dataclass_json
@dataclasses.dataclass
class BatchCreateJobsRequestInput:
    r"""BatchCreateJobsRequestInput
    Request to create a batch of jobs.
    """
    
    jobs: Optional[list[shared_job.JobInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobs') }})
    
