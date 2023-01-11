import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import productcountresponse as shared_productcountresponse


@dataclasses.dataclass
class CountAllProductsPathParams:
    organization_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CountAllProductsSecurity:
    zettle_api_key: Optional[shared_security.SchemeZettleAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    zettle_oauth: Optional[shared_security.SchemeZettleOauth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CountAllProductsRequest:
    path_params: CountAllProductsPathParams = dataclasses.field()
    security: CountAllProductsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CountAllProductsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    product_count_responses: Optional[list[shared_productcountresponse.ProductCountResponse]] = dataclasses.field(default=None)
    
