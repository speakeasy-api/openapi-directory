import dataclasses
from ..shared import permission as shared_permission


@dataclasses.dataclass
class DeletePermissionsRequest:
    request: shared_permission.Permission = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DeletePermissionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
