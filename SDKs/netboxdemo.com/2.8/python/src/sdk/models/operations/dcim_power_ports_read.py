import dataclasses
from typing import Optional
from ..shared import powerport as shared_powerport


@dataclasses.dataclass
class DcimPowerPortsReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimPowerPortsReadRequest:
    path_params: DcimPowerPortsReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimPowerPortsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    power_port: Optional[shared_powerport.PowerPort] = dataclasses.field(default=None)
    
