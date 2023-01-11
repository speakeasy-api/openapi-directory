import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import queuedresource as shared_queuedresource


@dataclass_json
@dataclasses.dataclass
class ListQueuedResourcesResponse:
    r"""ListQueuedResourcesResponse
    Response for ListQueuedResources.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    queued_resources: Optional[list[shared_queuedresource.QueuedResource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queuedResources') }})
    unreachable: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
