import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteTaxRatePathParams:
    tax_rate_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'taxRateUuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteTaxRateSecurity:
    zettle_api_key: Optional[shared_security.SchemeZettleAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    zettle_oauth: Optional[shared_security.SchemeZettleOauth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteTaxRateRequest:
    path_params: DeleteTaxRatePathParams = dataclasses.field()
    security: DeleteTaxRateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteTaxRateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
