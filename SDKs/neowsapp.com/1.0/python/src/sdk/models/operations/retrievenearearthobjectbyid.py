import dataclasses
from typing import Optional
from ..shared import nearearthobject as shared_nearearthobject


@dataclasses.dataclass
class RetrieveNearEarthObjectByIDPathParams:
    asteroid_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'asteroid_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RetrieveNearEarthObjectByIDRequest:
    path_params: RetrieveNearEarthObjectByIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class RetrieveNearEarthObjectByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    near_earth_object: Optional[shared_nearearthobject.NearEarthObject] = dataclasses.field(default=None)
    
