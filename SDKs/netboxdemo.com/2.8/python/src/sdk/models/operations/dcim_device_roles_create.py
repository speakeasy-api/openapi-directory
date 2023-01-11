import dataclasses
from typing import Optional
from ..shared import devicerole as shared_devicerole
from ..shared import devicerole as shared_devicerole


@dataclasses.dataclass
class DcimDeviceRolesCreateRequest:
    request: shared_devicerole.DeviceRoleInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimDeviceRolesCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    device_role: Optional[shared_devicerole.DeviceRole] = dataclasses.field(default=None)
    
