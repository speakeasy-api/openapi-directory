import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import writablevirtualmachineinterface as shared_writablevirtualmachineinterface
from ..shared import virtualmachineinterface as shared_virtualmachineinterface


@dataclasses.dataclass
class VirtualizationInterfacesPartialUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class VirtualizationInterfacesPartialUpdateRequest:
    path_params: VirtualizationInterfacesPartialUpdatePathParams = dataclasses.field()
    request: shared_writablevirtualmachineinterface.WritableVirtualMachineInterfaceInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class VirtualizationInterfacesPartialUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    virtual_machine_interface: Optional[shared_virtualmachineinterface.VirtualMachineInterface] = dataclasses.field(default=None)
    
