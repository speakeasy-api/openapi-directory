import dataclasses
from typing import Optional
from ..shared import tenant as shared_tenant


@dataclasses.dataclass
class TenancyTenantsReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TenancyTenantsReadRequest:
    path_params: TenancyTenantsReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TenancyTenantsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    tenant: Optional[shared_tenant.Tenant] = dataclasses.field(default=None)
    
