import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import spoke as shared_spoke


@dataclass_json
@dataclasses.dataclass
class ListSpokesResponse:
    r"""ListSpokesResponse
    The response for HubService.ListSpokes.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    spokes: Optional[list[shared_spoke.Spoke]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spokes') }})
    unreachable: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
