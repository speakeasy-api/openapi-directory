import dataclasses
from typing import Optional
from ..shared import interface as shared_interface


@dataclasses.dataclass
class VirtualizationInterfacesReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class VirtualizationInterfacesReadRequest:
    path_params: VirtualizationInterfacesReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class VirtualizationInterfacesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    interface: Optional[shared_interface.Interface] = dataclasses.field(default=None)
    
