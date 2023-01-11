import dataclasses
from typing import Optional
from ..shared import devicewithconfigcontext as shared_devicewithconfigcontext


@dataclasses.dataclass
class DcimDevicesReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimDevicesReadRequest:
    path_params: DcimDevicesReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimDevicesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    device_with_config_context: Optional[shared_devicewithconfigcontext.DeviceWithConfigContext] = dataclasses.field(default=None)
    
