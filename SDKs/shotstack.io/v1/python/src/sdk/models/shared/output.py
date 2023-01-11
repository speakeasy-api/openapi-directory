import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import shotstackdestination as shared_shotstackdestination
from ..shared import poster as shared_poster
from ..shared import range as shared_range
from ..shared import size as shared_size
from ..shared import thumbnail as shared_thumbnail

class OutputAspectRatioEnum(str, Enum):
    SIXTEEN_9 = "16:9"
    NINE_16 = "9:16"
    ONE_1 = "1:1"
    FOUR_5 = "4:5"
    FOUR_3 = "4:3"

class OutputFormatEnum(str, Enum):
    MP4 = "mp4"
    GIF = "gif"
    MP3 = "mp3"
    JPG = "jpg"
    PNG = "png"
    BMP = "bmp"

class OutputQualityEnum(str, Enum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"

class OutputResolutionEnum(str, Enum):
    PREVIEW = "preview"
    MOBILE = "mobile"
    SD = "sd"
    HD = "hd"
    ONE_THOUSAND_AND_EIGHTY = "1080"

class OutputScaleToEnum(str, Enum):
    PREVIEW = "preview"
    MOBILE = "mobile"
    SD = "sd"
    HD = "hd"
    ONE_THOUSAND_AND_EIGHTY = "1080"


@dataclass_json
@dataclasses.dataclass
class Output:
    r"""Output
    The output format, render range and type of media to generate.
    """
    
    format: OutputFormatEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    aspect_ratio: Optional[OutputAspectRatioEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aspectRatio') }})
    destinations: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinations') }})
    fps: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fps') }})
    poster: Optional[shared_poster.Poster] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('poster') }})
    quality: Optional[OutputQualityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quality') }})
    range: Optional[shared_range.Range] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    resolution: Optional[OutputResolutionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolution') }})
    scale_to: Optional[OutputScaleToEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scaleTo') }})
    size: Optional[shared_size.Size] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    thumbnail: Optional[shared_thumbnail.Thumbnail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnail') }})
    
