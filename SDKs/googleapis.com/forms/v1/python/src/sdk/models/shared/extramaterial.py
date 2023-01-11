import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import textlink as shared_textlink
from ..shared import videolink as shared_videolink


@dataclass_json
@dataclasses.dataclass
class ExtraMaterial:
    r"""ExtraMaterial
    Supplementary material to the feedback.
    """
    
    link: Optional[shared_textlink.TextLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    video: Optional[shared_videolink.VideoLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('video') }})
    
