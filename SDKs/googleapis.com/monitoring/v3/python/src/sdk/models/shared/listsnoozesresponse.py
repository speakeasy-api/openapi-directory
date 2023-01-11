import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import snooze as shared_snooze


@dataclass_json
@dataclasses.dataclass
class ListSnoozesResponse:
    r"""ListSnoozesResponse
    The results of a successful ListSnoozes call, containing the matching Snoozes.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    snoozes: Optional[list[shared_snooze.Snooze]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snoozes') }})
    
