import dataclasses
from typing import Optional
from ..shared import powerport as shared_powerport


@dataclasses.dataclass
class DcimPowerPortsTracePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimPowerPortsTraceRequest:
    path_params: DcimPowerPortsTracePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimPowerPortsTraceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    power_port: Optional[shared_powerport.PowerPort] = dataclasses.field(default=None)
    
