import dataclasses
from typing import Optional
from ..shared import locationresult as shared_locationresult


@dataclasses.dataclass
class GetLocationPathParams:
    group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    location_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'location_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetLocationRequest:
    path_params: GetLocationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetLocationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    location_result: Optional[shared_locationresult.LocationResult] = dataclasses.field(default=None)
    
