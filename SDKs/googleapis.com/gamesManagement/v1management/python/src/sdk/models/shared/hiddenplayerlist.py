import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import hiddenplayer as shared_hiddenplayer


@dataclass_json
@dataclasses.dataclass
class HiddenPlayerList:
    r"""HiddenPlayerList
    A list of hidden players.
    """
    
    items: Optional[list[shared_hiddenplayer.HiddenPlayer]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
