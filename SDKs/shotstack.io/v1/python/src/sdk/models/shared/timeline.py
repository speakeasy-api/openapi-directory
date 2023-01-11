import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import font as shared_font
from ..shared import soundtrack as shared_soundtrack
from ..shared import track as shared_track


@dataclass_json
@dataclasses.dataclass
class Timeline:
    r"""Timeline
    A timeline represents the contents of a video edit over time, an audio edit over time, in seconds, or an image layout. A timeline consists of layers called tracks. Tracks are composed of titles, images, audio, html or video segments referred to as clips which are placed along the track at specific starting point and lasting for a specific amount of time.
    """
    
    tracks: list[shared_track.Track] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tracks') }})
    background: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('background') }})
    cache: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cache') }})
    fonts: Optional[list[shared_font.Font]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fonts') }})
    soundtrack: Optional[shared_soundtrack.Soundtrack] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('soundtrack') }})
    
