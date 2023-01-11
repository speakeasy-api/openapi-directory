import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import jobrun as shared_jobrun


@dataclass_json
@dataclasses.dataclass
class ListJobRunsResponse:
    r"""ListJobRunsResponse
    ListJobRunsResponse is the response object returned by `ListJobRuns`.
    """
    
    job_runs: Optional[list[shared_jobrun.JobRun]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobRuns') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    unreachable: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
