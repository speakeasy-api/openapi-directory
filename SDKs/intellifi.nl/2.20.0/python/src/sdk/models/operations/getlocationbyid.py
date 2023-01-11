import dataclasses
from typing import Optional
from ..shared import location as shared_location


@dataclasses.dataclass
class GetLocationByIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetLocationByIDRequest:
    path_params: GetLocationByIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetLocationByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    location: Optional[shared_location.Location] = dataclasses.field(default=None)
    
