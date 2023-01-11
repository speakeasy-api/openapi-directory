import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import locations as shared_locations


@dataclasses.dataclass
class LocationsSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class LocationsRequest:
    security: LocationsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class LocationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied: Optional[Any] = dataclasses.field(default=None)
    locations: Optional[shared_locations.Locations] = dataclasses.field(default=None)
    
