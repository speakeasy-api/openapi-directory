import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import error as shared_error
from ..shared import tracks as shared_tracks
from ..shared import track as shared_track


@dataclasses.dataclass
class GetMeTracksQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    linked_partitioning: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'linked_partitioning', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetMeTracksSecurity:
    auth_header: shared_security.SchemeAuthHeader = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetMeTracksRequest:
    query_params: GetMeTracksQueryParams = dataclasses.field()
    security: GetMeTracksSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetMeTracksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    get_me_tracks_200_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    
