import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import writablevirtualmachine as shared_writablevirtualmachine
from ..shared import virtualmachine as shared_virtualmachine


@dataclasses.dataclass
class VirtualizationVirtualMachinesPartialUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class VirtualizationVirtualMachinesPartialUpdateRequest:
    path_params: VirtualizationVirtualMachinesPartialUpdatePathParams = dataclasses.field()
    request: shared_writablevirtualmachine.WritableVirtualMachineInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class VirtualizationVirtualMachinesPartialUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    virtual_machine: Optional[shared_virtualmachine.VirtualMachine] = dataclasses.field(default=None)
    
