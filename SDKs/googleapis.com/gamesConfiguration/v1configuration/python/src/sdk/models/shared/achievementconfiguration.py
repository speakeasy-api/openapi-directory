import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import achievementconfigurationdetail as shared_achievementconfigurationdetail

class AchievementConfigurationAchievementTypeEnum(str, Enum):
    ACHIEVEMENT_TYPE_UNSPECIFIED = "ACHIEVEMENT_TYPE_UNSPECIFIED"
    STANDARD = "STANDARD"
    INCREMENTAL = "INCREMENTAL"

class AchievementConfigurationInitialStateEnum(str, Enum):
    INITIAL_STATE_UNSPECIFIED = "INITIAL_STATE_UNSPECIFIED"
    HIDDEN = "HIDDEN"
    REVEALED = "REVEALED"


@dataclass_json
@dataclasses.dataclass
class AchievementConfiguration:
    r"""AchievementConfiguration
    An achievement configuration resource.
    """
    
    achievement_type: Optional[AchievementConfigurationAchievementTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('achievementType') }})
    draft: Optional[shared_achievementconfigurationdetail.AchievementConfigurationDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('draft') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    initial_state: Optional[AchievementConfigurationInitialStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initialState') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    published: Optional[shared_achievementconfigurationdetail.AchievementConfigurationDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('published') }})
    steps_to_unlock: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stepsToUnlock') }})
    token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    
