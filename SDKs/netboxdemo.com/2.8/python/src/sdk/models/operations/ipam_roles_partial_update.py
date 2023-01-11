import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import role as shared_role
from ..shared import role as shared_role


@dataclasses.dataclass
class IpamRolesPartialUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class IpamRolesPartialUpdateRequest:
    path_params: IpamRolesPartialUpdatePathParams = dataclasses.field()
    request: shared_role.RoleInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class IpamRolesPartialUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    role: Optional[shared_role.Role] = dataclasses.field(default=None)
    
