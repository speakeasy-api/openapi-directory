import dataclasses
from typing import Optional
from ..shared import geofence as shared_geofence


@dataclasses.dataclass
class PutGeofencesIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutGeofencesIDRequest:
    path_params: PutGeofencesIDPathParams = dataclasses.field()
    request: shared_geofence.Geofence = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutGeofencesIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    geofence: Optional[shared_geofence.Geofence] = dataclasses.field(default=None)
    
