import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import writablevirtualmachinewithconfigcontext as shared_writablevirtualmachinewithconfigcontext
from ..shared import virtualmachinewithconfigcontext as shared_virtualmachinewithconfigcontext


@dataclasses.dataclass
class VirtualizationVirtualMachinesUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class VirtualizationVirtualMachinesUpdateRequest:
    path_params: VirtualizationVirtualMachinesUpdatePathParams = dataclasses.field()
    request: shared_writablevirtualmachinewithconfigcontext.WritableVirtualMachineWithConfigContextInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class VirtualizationVirtualMachinesUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    virtual_machine_with_config_context: Optional[shared_virtualmachinewithconfigcontext.VirtualMachineWithConfigContext] = dataclasses.field(default=None)
    
