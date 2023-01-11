import dataclasses
from typing import Optional
from ..shared import rackrole as shared_rackrole
from ..shared import rackrole as shared_rackrole


@dataclasses.dataclass
class DcimRackRolesCreateRequest:
    request: shared_rackrole.RackRoleInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimRackRolesCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    rack_role: Optional[shared_rackrole.RackRole] = dataclasses.field(default=None)
    
