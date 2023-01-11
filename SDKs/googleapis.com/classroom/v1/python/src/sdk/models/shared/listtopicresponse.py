import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import topic as shared_topic


@dataclass_json
@dataclasses.dataclass
class ListTopicResponse:
    r"""ListTopicResponse
    Response when listing topics.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    topic: Optional[list[shared_topic.Topic]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    
