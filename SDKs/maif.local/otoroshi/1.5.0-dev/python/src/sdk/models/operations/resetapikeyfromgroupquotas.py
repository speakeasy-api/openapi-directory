import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import quotas as shared_quotas


@dataclasses.dataclass
class ResetAPIKeyFromGroupQuotasPathParams:
    client_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'clientId', 'style': 'simple', 'explode': False }})
    group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ResetAPIKeyFromGroupQuotasSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class ResetAPIKeyFromGroupQuotasRequest:
    path_params: ResetAPIKeyFromGroupQuotasPathParams = dataclasses.field()
    security: ResetAPIKeyFromGroupQuotasSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ResetAPIKeyFromGroupQuotasResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    quotas: Optional[shared_quotas.Quotas] = dataclasses.field(default=None)
    
