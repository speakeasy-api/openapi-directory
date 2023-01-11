import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import trackobject as shared_trackobject


@dataclass_json
@dataclasses.dataclass
class TracksObject:
    tracks: Optional[list[shared_trackobject.TrackObject]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tracks') }})
    
