import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import devicerole as shared_devicerole
from ..shared import devicerole as shared_devicerole


@dataclasses.dataclass
class DcimDeviceRolesUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimDeviceRolesUpdateRequest:
    path_params: DcimDeviceRolesUpdatePathParams = dataclasses.field()
    request: shared_devicerole.DeviceRoleInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimDeviceRolesUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    device_role: Optional[shared_devicerole.DeviceRole] = dataclasses.field(default=None)
    
