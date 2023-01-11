import dataclasses
from typing import Optional
from ..shared import interface as shared_interface


@dataclasses.dataclass
class DcimInterfacesReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimInterfacesReadRequest:
    path_params: DcimInterfacesReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimInterfacesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    interface: Optional[shared_interface.Interface] = dataclasses.field(default=None)
    
