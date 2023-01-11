import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import writablevirtualmachine as shared_writablevirtualmachine
from ..shared import virtualmachine as shared_virtualmachine


@dataclasses.dataclass
class VirtualizationVirtualMachinesUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class VirtualizationVirtualMachinesUpdateRequest:
    path_params: VirtualizationVirtualMachinesUpdatePathParams = dataclasses.field()
    request: shared_writablevirtualmachine.WritableVirtualMachineInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class VirtualizationVirtualMachinesUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    virtual_machine: Optional[shared_virtualmachine.VirtualMachine] = dataclasses.field(default=None)
    
