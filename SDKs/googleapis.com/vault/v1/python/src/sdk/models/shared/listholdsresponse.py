import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import hold as shared_hold


@dataclass_json
@dataclasses.dataclass
class ListHoldsResponse:
    r"""ListHoldsResponse
    The holds for a matter.
    """
    
    holds: Optional[list[shared_hold.Hold]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('holds') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
