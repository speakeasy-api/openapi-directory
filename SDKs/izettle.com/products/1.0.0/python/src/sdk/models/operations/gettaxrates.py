import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import taxratesresponse as shared_taxratesresponse


@dataclasses.dataclass
class GetTaxRatesSecurity:
    zettle_api_key: Optional[shared_security.SchemeZettleAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    zettle_oauth: Optional[shared_security.SchemeZettleOauth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetTaxRatesRequest:
    security: GetTaxRatesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTaxRatesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    tax_rates_responses: Optional[list[shared_taxratesresponse.TaxRatesResponse]] = dataclasses.field(default=None)
    
