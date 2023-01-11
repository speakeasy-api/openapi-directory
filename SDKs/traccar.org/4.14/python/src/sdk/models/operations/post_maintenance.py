import dataclasses
from typing import Optional
from ..shared import maintenance as shared_maintenance


@dataclasses.dataclass
class PostMaintenanceRequest:
    request: shared_maintenance.Maintenance = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostMaintenanceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    maintenance: Optional[shared_maintenance.Maintenance] = dataclasses.field(default=None)
    
