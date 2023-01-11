import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AchievementRevealResponseCurrentStateEnum(str, Enum):
    REVEAL_ACHIEVEMENT_STATE_UNSPECIFIED = "REVEAL_ACHIEVEMENT_STATE_UNSPECIFIED"
    REVEALED = "REVEALED"
    UNLOCKED = "UNLOCKED"


@dataclass_json
@dataclasses.dataclass
class AchievementRevealResponse:
    r"""AchievementRevealResponse
    An achievement reveal response
    """
    
    current_state: Optional[AchievementRevealResponseCurrentStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentState') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
