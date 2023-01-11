import dataclasses
from typing import Optional
from enum import Enum
from ..shared import access_enum as shared_access_enum
from ..shared import security as shared_security
from ..shared import activities as shared_activities
from ..shared import error as shared_error


@dataclasses.dataclass
class GetMeActivitiesTracksQueryParams:
    access: Optional[list[shared_access_enum.AccessEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access', 'style': 'form', 'explode': False }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetMeActivitiesTracksSecurity:
    auth_header: shared_security.SchemeAuthHeader = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetMeActivitiesTracksRequest:
    query_params: GetMeActivitiesTracksQueryParams = dataclasses.field()
    security: GetMeActivitiesTracksSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetMeActivitiesTracksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    activities: Optional[shared_activities.Activities] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
