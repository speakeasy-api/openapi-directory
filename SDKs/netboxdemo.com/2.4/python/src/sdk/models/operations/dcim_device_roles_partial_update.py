import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import devicerole as shared_devicerole
from ..shared import devicerole as shared_devicerole


@dataclasses.dataclass
class DcimDeviceRolesPartialUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimDeviceRolesPartialUpdateRequest:
    path_params: DcimDeviceRolesPartialUpdatePathParams = dataclasses.field()
    request: shared_devicerole.DeviceRoleInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimDeviceRolesPartialUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    device_role: Optional[shared_devicerole.DeviceRole] = dataclasses.field(default=None)
    
