import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class VideoFileDetailsVideoStreamRotationEnum(str, Enum):
    NONE = "none"
    CLOCKWISE = "clockwise"
    UPSIDE_DOWN = "upsideDown"
    COUNTER_CLOCKWISE = "counterClockwise"
    OTHER = "other"


@dataclass_json
@dataclasses.dataclass
class VideoFileDetailsVideoStream:
    r"""VideoFileDetailsVideoStream
    Information about a video stream.
    """
    
    aspect_ratio: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aspectRatio') }})
    bitrate_bps: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bitrateBps') }})
    codec: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('codec') }})
    frame_rate_fps: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frameRateFps') }})
    height_pixels: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('heightPixels') }})
    rotation: Optional[VideoFileDetailsVideoStreamRotationEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rotation') }})
    vendor: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vendor') }})
    width_pixels: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('widthPixels') }})
    
