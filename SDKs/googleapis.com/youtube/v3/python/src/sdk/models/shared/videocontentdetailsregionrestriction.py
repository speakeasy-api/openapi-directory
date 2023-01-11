import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class VideoContentDetailsRegionRestriction:
    r"""VideoContentDetailsRegionRestriction
    DEPRECATED Region restriction of the video.
    """
    
    allowed: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowed') }})
    blocked: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blocked') }})
    
