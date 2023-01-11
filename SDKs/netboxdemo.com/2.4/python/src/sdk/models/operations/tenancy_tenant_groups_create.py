import dataclasses
from typing import Optional
from ..shared import tenantgroup as shared_tenantgroup
from ..shared import tenantgroup as shared_tenantgroup


@dataclasses.dataclass
class TenancyTenantGroupsCreateRequest:
    request: shared_tenantgroup.TenantGroupInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class TenancyTenantGroupsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    tenant_group: Optional[shared_tenantgroup.TenantGroup] = dataclasses.field(default=None)
    
