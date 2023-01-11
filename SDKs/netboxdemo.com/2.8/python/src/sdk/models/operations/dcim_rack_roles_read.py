import dataclasses
from typing import Optional
from ..shared import rackrole as shared_rackrole


@dataclasses.dataclass
class DcimRackRolesReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimRackRolesReadRequest:
    path_params: DcimRackRolesReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimRackRolesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    rack_role: Optional[shared_rackrole.RackRole] = dataclasses.field(default=None)
    
