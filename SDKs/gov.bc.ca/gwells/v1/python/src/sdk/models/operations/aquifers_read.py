import dataclasses
from typing import Optional
from ..shared import aquifer as shared_aquifer


@dataclasses.dataclass
class AquifersReadPathParams:
    aquifer_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'aquifer_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AquifersReadRequest:
    path_params: AquifersReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class AquifersReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    aquifer: Optional[shared_aquifer.Aquifer] = dataclasses.field(default=None)
    
