import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cutoverjob as shared_cutoverjob


@dataclass_json
@dataclasses.dataclass
class ListCutoverJobsResponse:
    r"""ListCutoverJobsResponse
    Response message for 'ListCutoverJobs' request.
    """
    
    cutover_jobs: Optional[list[shared_cutoverjob.CutoverJob]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cutoverJobs') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    unreachable: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
