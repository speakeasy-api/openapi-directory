import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import writabletenantgroup as shared_writabletenantgroup
from ..shared import tenantgroup as shared_tenantgroup


@dataclasses.dataclass
class TenancyTenantGroupsPartialUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TenancyTenantGroupsPartialUpdateRequest:
    path_params: TenancyTenantGroupsPartialUpdatePathParams = dataclasses.field()
    request: shared_writabletenantgroup.WritableTenantGroupInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class TenancyTenantGroupsPartialUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    tenant_group: Optional[shared_tenantgroup.TenantGroup] = dataclasses.field(default=None)
    
