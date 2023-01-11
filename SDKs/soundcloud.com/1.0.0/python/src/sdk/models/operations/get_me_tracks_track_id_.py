import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import track as shared_track


@dataclasses.dataclass
class GetMeTracksTrackIDPathParams:
    track_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'track_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMeTracksTrackIDSecurity:
    auth_header: shared_security.SchemeAuthHeader = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetMeTracksTrackIDRequest:
    path_params: GetMeTracksTrackIDPathParams = dataclasses.field()
    security: GetMeTracksTrackIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetMeTracksTrackIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    track: Optional[shared_track.Track] = dataclasses.field(default=None)
    
