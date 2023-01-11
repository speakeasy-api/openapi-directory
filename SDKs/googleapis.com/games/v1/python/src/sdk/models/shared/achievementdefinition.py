import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AchievementDefinitionAchievementTypeEnum(str, Enum):
    ACHIEVEMENT_TYPE_UNSPECIFIED = "ACHIEVEMENT_TYPE_UNSPECIFIED"
    STANDARD = "STANDARD"
    INCREMENTAL = "INCREMENTAL"

class AchievementDefinitionInitialStateEnum(str, Enum):
    INITIAL_ACHIEVEMENT_STATE_UNSPECIFIED = "INITIAL_ACHIEVEMENT_STATE_UNSPECIFIED"
    HIDDEN = "HIDDEN"
    REVEALED = "REVEALED"
    UNLOCKED = "UNLOCKED"


@dataclass_json
@dataclasses.dataclass
class AchievementDefinition:
    r"""AchievementDefinition
    An achievement definition object.
    """
    
    achievement_type: Optional[AchievementDefinitionAchievementTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('achievementType') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    experience_points: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('experiencePoints') }})
    formatted_total_steps: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formattedTotalSteps') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    initial_state: Optional[AchievementDefinitionInitialStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initialState') }})
    is_revealed_icon_url_default: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isRevealedIconUrlDefault') }})
    is_unlocked_icon_url_default: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isUnlockedIconUrlDefault') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    revealed_icon_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revealedIconUrl') }})
    total_steps: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSteps') }})
    unlocked_icon_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unlockedIconUrl') }})
    
