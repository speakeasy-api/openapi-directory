import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import queue as shared_queue


@dataclass_json
@dataclasses.dataclass
class ListQueuesResponse:
    r"""ListQueuesResponse
    Response message for ListQueues.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    queues: Optional[list[shared_queue.Queue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queues') }})
    
