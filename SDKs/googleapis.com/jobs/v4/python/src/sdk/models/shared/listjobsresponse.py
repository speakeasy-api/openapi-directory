import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import job as shared_job
from ..shared import responsemetadata as shared_responsemetadata


@dataclass_json
@dataclasses.dataclass
class ListJobsResponse:
    r"""ListJobsResponse
    List jobs response.
    """
    
    jobs: Optional[list[shared_job.Job]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobs') }})
    metadata: Optional[shared_responsemetadata.ResponseMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
