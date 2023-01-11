import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import waiter as shared_waiter


@dataclass_json
@dataclasses.dataclass
class ListWaitersResponse:
    r"""ListWaitersResponse
    Response for the `ListWaiters()` method. Order of returned waiter objects is arbitrary.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    waiters: Optional[list[shared_waiter.Waiter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('waiters') }})
    
