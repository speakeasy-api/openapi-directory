import dataclasses
from typing import Optional
from ..shared import maintenance as shared_maintenance


@dataclasses.dataclass
class PutMaintenanceIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutMaintenanceIDRequest:
    path_params: PutMaintenanceIDPathParams = dataclasses.field()
    request: shared_maintenance.Maintenance = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutMaintenanceIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    maintenance: Optional[shared_maintenance.Maintenance] = dataclasses.field(default=None)
    
