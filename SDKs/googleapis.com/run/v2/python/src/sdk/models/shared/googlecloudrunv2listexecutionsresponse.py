import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudrunv2execution as shared_googlecloudrunv2execution


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRunV2ListExecutionsResponse:
    r"""GoogleCloudRunV2ListExecutionsResponse
    Response message containing a list of Executions.
    """
    
    executions: Optional[list[shared_googlecloudrunv2execution.GoogleCloudRunV2Execution]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executions') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
