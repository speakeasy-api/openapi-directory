import dataclasses
from typing import Optional
from ..shared import writablevirtualmachine as shared_writablevirtualmachine
from ..shared import virtualmachine as shared_virtualmachine


@dataclasses.dataclass
class VirtualizationVirtualMachinesCreateRequest:
    request: shared_writablevirtualmachine.WritableVirtualMachineInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class VirtualizationVirtualMachinesCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    virtual_machine: Optional[shared_virtualmachine.VirtualMachine] = dataclasses.field(default=None)
    
