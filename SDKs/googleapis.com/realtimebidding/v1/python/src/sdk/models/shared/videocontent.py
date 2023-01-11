import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import videometadata as shared_videometadata


@dataclass_json
@dataclasses.dataclass
class VideoContent:
    r"""VideoContent
    Video content for a creative.
    """
    
    video_metadata: Optional[shared_videometadata.VideoMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoMetadata') }})
    video_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoUrl') }})
    video_vast_xml: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoVastXml') }})
    
