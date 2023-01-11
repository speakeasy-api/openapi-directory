import dataclasses
from typing import Optional
from enum import Enum
from ..shared import access_enum as shared_access_enum
from ..shared import security as shared_security
from ..shared import error as shared_error
from ..shared import track as shared_track


@dataclasses.dataclass
class GetMeFollowingsTracksQueryParams:
    access: Optional[list[shared_access_enum.AccessEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access', 'style': 'form', 'explode': False }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetMeFollowingsTracksSecurity:
    auth_header: shared_security.SchemeAuthHeader = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetMeFollowingsTracksRequest:
    query_params: GetMeFollowingsTracksQueryParams = dataclasses.field()
    security: GetMeFollowingsTracksSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetMeFollowingsTracksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    tracks_list: Optional[list[shared_track.Track]] = dataclasses.field(default=None)
    
