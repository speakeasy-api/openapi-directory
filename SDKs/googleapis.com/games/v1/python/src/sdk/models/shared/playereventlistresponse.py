import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import playerevent as shared_playerevent


@dataclass_json
@dataclasses.dataclass
class PlayerEventListResponse:
    r"""PlayerEventListResponse
    A ListByPlayer response.
    """
    
    items: Optional[list[shared_playerevent.PlayerEvent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
