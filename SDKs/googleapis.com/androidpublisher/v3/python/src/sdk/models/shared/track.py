import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import trackrelease as shared_trackrelease


@dataclass_json
@dataclasses.dataclass
class Track:
    r"""Track
    A track configuration. The resource for TracksService.
    """
    
    releases: Optional[list[shared_trackrelease.TrackRelease]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('releases') }})
    track: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('track') }})
    
