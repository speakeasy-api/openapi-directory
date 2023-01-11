import dataclasses
from typing import Optional
from ..shared import rearport as shared_rearport


@dataclasses.dataclass
class DcimRearPortsTracePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimRearPortsTraceRequest:
    path_params: DcimRearPortsTracePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimRearPortsTraceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    rear_port: Optional[shared_rearport.RearPort] = dataclasses.field(default=None)
    
