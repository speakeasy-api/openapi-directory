import dataclasses
from typing import Optional
from ..shared import devicerole as shared_devicerole


@dataclasses.dataclass
class DcimDeviceRolesReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimDeviceRolesReadRequest:
    path_params: DcimDeviceRolesReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimDeviceRolesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    device_role: Optional[shared_devicerole.DeviceRole] = dataclasses.field(default=None)
    
