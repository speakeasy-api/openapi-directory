import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import quotas as shared_quotas


@dataclasses.dataclass
class ResetAPIKeyQuotasPathParams:
    client_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'clientId', 'style': 'simple', 'explode': False }})
    service_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ResetAPIKeyQuotasSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class ResetAPIKeyQuotasRequest:
    path_params: ResetAPIKeyQuotasPathParams = dataclasses.field()
    security: ResetAPIKeyQuotasSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ResetAPIKeyQuotasResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    quotas: Optional[shared_quotas.Quotas] = dataclasses.field(default=None)
    
