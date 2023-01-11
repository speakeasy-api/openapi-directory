import dataclasses
from typing import Optional
from ..shared import writablevirtualmachineinterface as shared_writablevirtualmachineinterface
from ..shared import virtualmachineinterface as shared_virtualmachineinterface


@dataclasses.dataclass
class VirtualizationInterfacesCreateRequest:
    request: shared_writablevirtualmachineinterface.WritableVirtualMachineInterfaceInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class VirtualizationInterfacesCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    virtual_machine_interface: Optional[shared_virtualmachineinterface.VirtualMachineInterface] = dataclasses.field(default=None)
    
