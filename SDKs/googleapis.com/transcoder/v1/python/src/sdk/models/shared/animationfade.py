import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import normalizedcoordinate as shared_normalizedcoordinate

class AnimationFadeFadeTypeEnum(str, Enum):
    FADE_TYPE_UNSPECIFIED = "FADE_TYPE_UNSPECIFIED"
    FADE_IN = "FADE_IN"
    FADE_OUT = "FADE_OUT"


@dataclass_json
@dataclasses.dataclass
class AnimationFade:
    r"""AnimationFade
    Display overlay object with fade animation.
    """
    
    end_time_offset: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTimeOffset') }})
    fade_type: Optional[AnimationFadeFadeTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fadeType') }})
    start_time_offset: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTimeOffset') }})
    xy: Optional[shared_normalizedcoordinate.NormalizedCoordinate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('xy') }})
    
