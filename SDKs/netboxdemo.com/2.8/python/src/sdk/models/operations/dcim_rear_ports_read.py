import dataclasses
from typing import Optional
from ..shared import rearport as shared_rearport


@dataclasses.dataclass
class DcimRearPortsReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimRearPortsReadRequest:
    path_params: DcimRearPortsReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimRearPortsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    rear_port: Optional[shared_rearport.RearPort] = dataclasses.field(default=None)
    
