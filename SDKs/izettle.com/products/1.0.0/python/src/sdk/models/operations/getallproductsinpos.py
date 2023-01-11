import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import productresponse as shared_productresponse


@dataclasses.dataclass
class GetAllProductsInPosPathParams:
    organization_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAllProductsInPosSecurity:
    zettle_api_key: Optional[shared_security.SchemeZettleAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    zettle_oauth: Optional[shared_security.SchemeZettleOauth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetAllProductsInPosRequest:
    path_params: GetAllProductsInPosPathParams = dataclasses.field()
    security: GetAllProductsInPosSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAllProductsInPosResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    product_responses: Optional[list[shared_productresponse.ProductResponse]] = dataclasses.field(default=None)
    
