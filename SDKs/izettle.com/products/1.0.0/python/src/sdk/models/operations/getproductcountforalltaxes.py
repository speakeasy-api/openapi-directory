import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import taxrateproductcountresponse as shared_taxrateproductcountresponse


@dataclasses.dataclass
class GetProductCountForAllTaxesSecurity:
    zettle_api_key: Optional[shared_security.SchemeZettleAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    zettle_oauth: Optional[shared_security.SchemeZettleOauth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetProductCountForAllTaxesRequest:
    security: GetProductCountForAllTaxesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetProductCountForAllTaxesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    tax_rate_product_count_response: Optional[shared_taxrateproductcountresponse.TaxRateProductCountResponse] = dataclasses.field(default=None)
    
