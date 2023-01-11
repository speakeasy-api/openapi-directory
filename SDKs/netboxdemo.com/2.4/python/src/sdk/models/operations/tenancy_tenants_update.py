import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import writabletenant as shared_writabletenant
from ..shared import tenant as shared_tenant


@dataclasses.dataclass
class TenancyTenantsUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TenancyTenantsUpdateRequest:
    path_params: TenancyTenantsUpdatePathParams = dataclasses.field()
    request: shared_writabletenant.WritableTenantInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class TenancyTenantsUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    tenant: Optional[shared_tenant.Tenant] = dataclasses.field(default=None)
    
