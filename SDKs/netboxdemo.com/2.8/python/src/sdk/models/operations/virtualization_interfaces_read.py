import dataclasses
from typing import Optional
from ..shared import virtualmachineinterface as shared_virtualmachineinterface


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
    virtual_machine_interface: Optional[shared_virtualmachineinterface.VirtualMachineInterface] = dataclasses.field(default=None)
    
