import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import rackrole as shared_rackrole
from ..shared import rackrole as shared_rackrole


@dataclasses.dataclass
class DcimRackRolesUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimRackRolesUpdateRequest:
    path_params: DcimRackRolesUpdatePathParams = dataclasses.field()
    request: shared_rackrole.RackRoleInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimRackRolesUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    rack_role: Optional[shared_rackrole.RackRole] = dataclasses.field(default=None)
    
