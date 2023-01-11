import dataclasses
from typing import Optional
from ..shared import deviceinterface as shared_deviceinterface


@dataclasses.dataclass
class DcimInterfacesTracePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimInterfacesTraceRequest:
    path_params: DcimInterfacesTracePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimInterfacesTraceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    device_interface: Optional[shared_deviceinterface.DeviceInterface] = dataclasses.field(default=None)
    
