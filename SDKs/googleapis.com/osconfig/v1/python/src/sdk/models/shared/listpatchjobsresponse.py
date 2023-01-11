import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import patchjob as shared_patchjob


@dataclass_json
@dataclasses.dataclass
class ListPatchJobsResponse:
    r"""ListPatchJobsResponse
    A response message for listing patch jobs.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    patch_jobs: Optional[list[shared_patchjob.PatchJob]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('patchJobs') }})
    
