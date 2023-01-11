import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import taxratescreaterequest as shared_taxratescreaterequest
from ..shared import errorresponse as shared_errorresponse
from ..shared import taxratesresponse as shared_taxratesresponse


@dataclasses.dataclass
class CreateTaxRatesSecurity:
    zettle_api_key: Optional[shared_security.SchemeZettleAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    zettle_oauth: Optional[shared_security.SchemeZettleOauth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreateTaxRatesRequest:
    request: shared_taxratescreaterequest.TaxRatesCreateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateTaxRatesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateTaxRatesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    tax_rates_response: Optional[shared_taxratesresponse.TaxRatesResponse] = dataclasses.field(default=None)
    
