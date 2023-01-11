import dataclasses
from typing import Optional
from ..shared import maintenance_status as shared_maintenance_status


@dataclasses.dataclass
class EnterpriseAdminGetMaintenanceStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    maintenance_status: Optional[shared_maintenance_status.MaintenanceStatus] = dataclasses.field(default=None)
    
