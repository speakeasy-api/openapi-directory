import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mediaproperties as shared_mediaproperties


@dataclass_json
@dataclasses.dataclass
class Video:
    r"""Video
    Data representing a video.
    """
    
    properties: Optional[shared_mediaproperties.MediaProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    youtube_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('youtubeUri') }})
    
