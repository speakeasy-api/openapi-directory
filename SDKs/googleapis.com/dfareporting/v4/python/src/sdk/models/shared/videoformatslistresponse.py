import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import videoformat as shared_videoformat


@dataclass_json
@dataclasses.dataclass
class VideoFormatsListResponse:
    r"""VideoFormatsListResponse
    Video Format List Response
    """
    
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    video_formats: Optional[list[shared_videoformat.VideoFormat]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoFormats') }})
    
