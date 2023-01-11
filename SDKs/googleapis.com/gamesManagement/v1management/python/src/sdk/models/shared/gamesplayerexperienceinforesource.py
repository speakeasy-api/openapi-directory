import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gamesplayerlevelresource as shared_gamesplayerlevelresource


@dataclass_json
@dataclasses.dataclass
class GamesPlayerExperienceInfoResource:
    r"""GamesPlayerExperienceInfoResource
    1P/3P metadata about the player's experience.
    """
    
    current_experience_points: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentExperiencePoints') }})
    current_level: Optional[shared_gamesplayerlevelresource.GamesPlayerLevelResource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentLevel') }})
    last_level_up_timestamp_millis: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastLevelUpTimestampMillis') }})
    next_level: Optional[shared_gamesplayerlevelresource.GamesPlayerLevelResource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextLevel') }})
    
