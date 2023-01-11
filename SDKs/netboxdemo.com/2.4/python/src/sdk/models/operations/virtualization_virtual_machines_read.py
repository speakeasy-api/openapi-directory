import dataclasses
from typing import Optional
from ..shared import virtualmachinewithconfigcontext as shared_virtualmachinewithconfigcontext


@dataclasses.dataclass
class VirtualizationVirtualMachinesReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class VirtualizationVirtualMachinesReadRequest:
    path_params: VirtualizationVirtualMachinesReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class VirtualizationVirtualMachinesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    virtual_machine_with_config_context: Optional[shared_virtualmachinewithconfigcontext.VirtualMachineWithConfigContext] = dataclasses.field(default=None)
    
