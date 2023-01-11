import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import playerlevel as shared_playerlevel


@dataclass_json
@dataclasses.dataclass
class MetagameConfig:
    r"""MetagameConfig
    The metagame config resource
    """
    
    current_version: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentVersion') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    player_levels: Optional[list[shared_playerlevel.PlayerLevel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playerLevels') }})
    
