import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import player as shared_player


@dataclass_json
@dataclasses.dataclass
class HiddenPlayer:
    r"""HiddenPlayer
    The HiddenPlayer resource.
    """
    
    hidden_time_millis: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hiddenTimeMillis') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    player: Optional[shared_player.Player] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('player') }})
    
