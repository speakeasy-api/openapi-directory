import dataclasses
from typing import Optional
from ..shared import geofence as shared_geofence


@dataclasses.dataclass
class PostGeofencesRequest:
    request: shared_geofence.Geofence = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostGeofencesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    geofence: Optional[shared_geofence.Geofence] = dataclasses.field(default=None)
    
