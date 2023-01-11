import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import audiorendertimelinespan as shared_audiorendertimelinespan


@dataclass_json
@dataclasses.dataclass
class AudioRenderTimeline:
    r"""AudioRenderTimeline
    A timeline object that represents either a request for music to be created or an entire music composition
    """
    
    spans: Optional[list[shared_audiorendertimelinespan.AudioRenderTimelineSpan]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spans') }})
    
