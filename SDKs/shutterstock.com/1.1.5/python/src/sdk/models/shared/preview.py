import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PreviewContentTypeEnum(str, Enum):
    AUDIO_MP3 = "audio/mp3"


@dataclass_json
@dataclasses.dataclass
class Preview:
    r"""Preview
    Preview information
    """
    
    content_type: Optional[PreviewContentTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_type') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
