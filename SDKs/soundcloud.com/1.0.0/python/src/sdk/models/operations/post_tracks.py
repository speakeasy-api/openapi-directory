import dataclasses
from typing import Optional
from ..shared import trackdatarequest as shared_trackdatarequest
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import error as shared_error
from ..shared import track as shared_track


@dataclasses.dataclass
class PostTracksRequests:
    track_data_request: Optional[shared_trackdatarequest.TrackDataRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    track_data_request1: Optional[shared_trackdatarequest.TrackDataRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class PostTracksSecurity:
    auth_header: shared_security.SchemeAuthHeader = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    client_id: shared_security.SchemeClientID = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class PostTracksRequest:
    security: PostTracksSecurity = dataclasses.field()
    request: Optional[PostTracksRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PostTracksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    track: Optional[shared_track.Track] = dataclasses.field(default=None)
    
