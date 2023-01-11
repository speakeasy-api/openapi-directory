import dataclasses
from typing import Optional
from ..shared import tenantgroup as shared_tenantgroup


@dataclasses.dataclass
class TenancyTenantGroupsReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TenancyTenantGroupsReadRequest:
    path_params: TenancyTenantGroupsReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TenancyTenantGroupsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    tenant_group: Optional[shared_tenantgroup.TenantGroup] = dataclasses.field(default=None)
    
