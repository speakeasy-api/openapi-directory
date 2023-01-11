import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class VideoTargetingExcludedPositionTypesEnum(str, Enum):
    POSITION_TYPE_UNSPECIFIED = "POSITION_TYPE_UNSPECIFIED"
    PREROLL = "PREROLL"
    MIDROLL = "MIDROLL"
    POSTROLL = "POSTROLL"

class VideoTargetingTargetedPositionTypesEnum(str, Enum):
    POSITION_TYPE_UNSPECIFIED = "POSITION_TYPE_UNSPECIFIED"
    PREROLL = "PREROLL"
    MIDROLL = "MIDROLL"
    POSTROLL = "POSTROLL"


@dataclass_json
@dataclasses.dataclass
class VideoTargeting:
    r"""VideoTargeting
    Represents targeting information about video.
    """
    
    excluded_position_types: Optional[list[VideoTargetingExcludedPositionTypesEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludedPositionTypes') }})
    targeted_position_types: Optional[list[VideoTargetingTargetedPositionTypesEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetedPositionTypes') }})
    
