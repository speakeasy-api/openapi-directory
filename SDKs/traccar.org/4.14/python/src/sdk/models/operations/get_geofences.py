import dataclasses
from typing import Optional
from ..shared import geofence as shared_geofence


@dataclasses.dataclass
class GetGeofencesQueryParams:
    all: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'all', 'style': 'form', 'explode': True }})
    device_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'deviceId', 'style': 'form', 'explode': True }})
    group_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'groupId', 'style': 'form', 'explode': True }})
    refresh: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'refresh', 'style': 'form', 'explode': True }})
    user_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetGeofencesRequest:
    query_params: GetGeofencesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGeofencesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    geofences: Optional[list[shared_geofence.Geofence]] = dataclasses.field(default=None)
    
