import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import size as shared_size

class VideoFormatFileTypeEnum(str, Enum):
    FLV = "FLV"
    THREEGPP = "THREEGPP"
    MP4 = "MP4"
    WEBM = "WEBM"
    M3_U8 = "M3U8"


@dataclass_json
@dataclasses.dataclass
class VideoFormat:
    r"""VideoFormat
    Contains information about supported video formats.
    """
    
    file_type: Optional[VideoFormatFileTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileType') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    resolution: Optional[shared_size.Size] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolution') }})
    target_bit_rate: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetBitRate') }})
    
