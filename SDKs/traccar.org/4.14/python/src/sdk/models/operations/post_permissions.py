import dataclasses
from typing import Optional
from ..shared import permission as shared_permission


@dataclasses.dataclass
class PostPermissionsRequest:
    request: shared_permission.Permission = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostPermissionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    permission: Optional[shared_permission.Permission] = dataclasses.field(default=None)
    
