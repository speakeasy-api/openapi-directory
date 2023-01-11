import dataclasses
from typing import Optional
from ..shared import cable as shared_cable


@dataclasses.dataclass
class DcimCablesReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimCablesReadRequest:
    path_params: DcimCablesReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimCablesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    cable: Optional[shared_cable.Cable] = dataclasses.field(default=None)
    
