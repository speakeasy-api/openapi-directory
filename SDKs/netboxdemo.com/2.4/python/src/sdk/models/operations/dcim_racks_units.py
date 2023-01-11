import dataclasses
from typing import Optional
from ..shared import rack as shared_rack


@dataclasses.dataclass
class DcimRacksUnitsPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimRacksUnitsRequest:
    path_params: DcimRacksUnitsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimRacksUnitsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    rack: Optional[shared_rack.Rack] = dataclasses.field(default=None)
    
