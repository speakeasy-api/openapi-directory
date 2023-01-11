import dataclasses
from typing import Optional
from ..shared import writabletenant as shared_writabletenant
from ..shared import tenant as shared_tenant


@dataclasses.dataclass
class TenancyTenantsCreateRequest:
    request: shared_writabletenant.WritableTenantInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class TenancyTenantsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    tenant: Optional[shared_tenant.Tenant] = dataclasses.field(default=None)
    
