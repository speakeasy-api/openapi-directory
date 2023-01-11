import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import taxrateupdaterequest as shared_taxrateupdaterequest
from ..shared import errorresponse as shared_errorresponse
from ..shared import taxrate as shared_taxrate


@dataclasses.dataclass
class UpdateTaxRatePathParams:
    tax_rate_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'taxRateUuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateTaxRateSecurity:
    zettle_api_key: Optional[shared_security.SchemeZettleAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    zettle_oauth: Optional[shared_security.SchemeZettleOauth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UpdateTaxRateRequest:
    path_params: UpdateTaxRatePathParams = dataclasses.field()
    request: shared_taxrateupdaterequest.TaxRateUpdateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateTaxRateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UpdateTaxRateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    tax_rate: Optional[shared_taxrate.TaxRate] = dataclasses.field(default=None)
    
