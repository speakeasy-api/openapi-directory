import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import job as shared_job


@dataclass_json
@dataclasses.dataclass
class ListJobsResponse:
    r"""ListJobsResponse
    A list of jobs in a project.
    """
    
    jobs: Optional[list[shared_job.Job]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobs') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
