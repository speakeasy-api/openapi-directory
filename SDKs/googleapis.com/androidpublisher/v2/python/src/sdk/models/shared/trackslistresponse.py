import dataclasses
from typing import Optional
from ..shared import track as shared_track


@dataclasses.dataclass
class TracksListResponse:
    kind: Optional[str] = dataclasses.field(default=None)
    tracks: Optional[list[shared_track.Track]] = dataclasses.field(default=None)
    
