import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import video as shared_video


@dataclass_json
@dataclasses.dataclass
class VideoItem:
    r"""VideoItem
    An item containing a video.
    """
    
    caption: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caption') }})
    video: Optional[shared_video.Video] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('video') }})
    
