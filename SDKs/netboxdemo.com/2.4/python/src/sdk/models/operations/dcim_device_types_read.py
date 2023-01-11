import dataclasses
from typing import Optional
from ..shared import devicetype as shared_devicetype


@dataclasses.dataclass
class DcimDeviceTypesReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimDeviceTypesReadRequest:
    path_params: DcimDeviceTypesReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimDeviceTypesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    device_type: Optional[shared_devicetype.DeviceType] = dataclasses.field(default=None)
    
