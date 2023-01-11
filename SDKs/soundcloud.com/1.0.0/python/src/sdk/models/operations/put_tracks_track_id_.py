import dataclasses
from typing import Optional
from ..shared import trackdatarequest as shared_trackdatarequest
from ..shared import trackmetadatarequest as shared_trackmetadatarequest
from ..shared import security as shared_security
from ..shared import error as shared_error
from ..shared import track as shared_track


@dataclasses.dataclass
class PutTracksTrackIDPathParams:
    track_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'track_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutTracksTrackIDRequests:
    track_data_request: Optional[shared_trackdatarequest.TrackDataRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    track_data_request1: Optional[shared_trackdatarequest.TrackDataRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/x-www-form-urlencoded' }})
    track_metadata_request: Optional[shared_trackmetadatarequest.TrackMetadataRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutTracksTrackIDSecurity:
    auth_header: shared_security.SchemeAuthHeader = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PutTracksTrackIDRequest:
    path_params: PutTracksTrackIDPathParams = dataclasses.field()
    security: PutTracksTrackIDSecurity = dataclasses.field()
    request: Optional[PutTracksTrackIDRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PutTracksTrackIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    track: Optional[shared_track.Track] = dataclasses.field(default=None)
    
