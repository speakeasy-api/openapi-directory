import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import track as shared_track


@dataclass_json
@dataclasses.dataclass
class TracksListResponse:
    r"""TracksListResponse
    Response listing all tracks.
    """
    
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    tracks: Optional[list[shared_track.Track]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tracks') }})
    
