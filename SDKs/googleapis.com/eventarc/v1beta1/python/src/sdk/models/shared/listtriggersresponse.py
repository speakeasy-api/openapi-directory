import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import trigger as shared_trigger


@dataclass_json
@dataclasses.dataclass
class ListTriggersResponse:
    r"""ListTriggersResponse
    The response message for the ListTriggers method.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    triggers: Optional[list[shared_trigger.Trigger]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggers') }})
    unreachable: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
