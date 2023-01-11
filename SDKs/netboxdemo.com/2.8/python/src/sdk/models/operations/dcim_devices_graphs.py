import dataclasses
from typing import Optional
from ..shared import devicewithconfigcontext as shared_devicewithconfigcontext


@dataclasses.dataclass
class DcimDevicesGraphsPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimDevicesGraphsRequest:
    path_params: DcimDevicesGraphsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimDevicesGraphsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    device_with_config_context: Optional[shared_devicewithconfigcontext.DeviceWithConfigContext] = dataclasses.field(default=None)
    
