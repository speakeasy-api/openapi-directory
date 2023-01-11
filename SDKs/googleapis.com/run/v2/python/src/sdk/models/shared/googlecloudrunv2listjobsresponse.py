import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudrunv2job as shared_googlecloudrunv2job


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRunV2ListJobsResponse:
    r"""GoogleCloudRunV2ListJobsResponse
    Response message containing a list of Jobs.
    """
    
    jobs: Optional[list[shared_googlecloudrunv2job.GoogleCloudRunV2Job]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobs') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
