import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import clonejob as shared_clonejob


@dataclass_json
@dataclasses.dataclass
class ListCloneJobsResponse:
    r"""ListCloneJobsResponse
    Response message for 'ListCloneJobs' request.
    """
    
    clone_jobs: Optional[list[shared_clonejob.CloneJob]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloneJobs') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    unreachable: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
