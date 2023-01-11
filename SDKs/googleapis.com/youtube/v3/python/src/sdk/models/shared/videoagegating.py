import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class VideoAgeGatingVideoGameRatingEnum(str, Enum):
    ANYONE = "anyone"
    M15_PLUS = "m15Plus"
    M16_PLUS = "m16Plus"
    M17_PLUS = "m17Plus"


@dataclass_json
@dataclasses.dataclass
class VideoAgeGating:
    alcohol_content: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alcoholContent') }})
    restricted: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restricted') }})
    video_game_rating: Optional[VideoAgeGatingVideoGameRatingEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoGameRating') }})
    
