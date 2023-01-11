import dataclasses
from typing import Optional
from ..shared import writablevirtualmachinewithconfigcontext as shared_writablevirtualmachinewithconfigcontext
from ..shared import virtualmachinewithconfigcontext as shared_virtualmachinewithconfigcontext


@dataclasses.dataclass
class VirtualizationVirtualMachinesCreateRequest:
    request: shared_writablevirtualmachinewithconfigcontext.WritableVirtualMachineWithConfigContextInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class VirtualizationVirtualMachinesCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    virtual_machine_with_config_context: Optional[shared_virtualmachinewithconfigcontext.VirtualMachineWithConfigContext] = dataclasses.field(default=None)
    
