import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudrunv2task as shared_googlecloudrunv2task


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRunV2ListTasksResponse:
    r"""GoogleCloudRunV2ListTasksResponse
    Response message containing a list of Tasks.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    tasks: Optional[list[shared_googlecloudrunv2task.GoogleCloudRunV2Task]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tasks') }})
    
