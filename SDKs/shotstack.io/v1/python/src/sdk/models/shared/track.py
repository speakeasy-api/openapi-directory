import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import clip as shared_clip


@dataclass_json
@dataclasses.dataclass
class Track:
    r"""Track
    A track contains an array of clips. Tracks are layered on top of each other in the order in the array. The top most track will render on top of those below it.
    """
    
    clips: list[shared_clip.Clip] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clips') }})
    
