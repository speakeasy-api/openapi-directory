import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import productresponse as shared_productresponse


@dataclasses.dataclass
class GetAllProductsV2PathParams:
    organization_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAllProductsV2QueryParams:
    sort: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAllProductsV2Security:
    zettle_api_key: Optional[shared_security.SchemeZettleAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    zettle_oauth: Optional[shared_security.SchemeZettleOauth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetAllProductsV2Request:
    path_params: GetAllProductsV2PathParams = dataclasses.field()
    query_params: GetAllProductsV2QueryParams = dataclasses.field()
    security: GetAllProductsV2Security = dataclasses.field()
    

@dataclasses.dataclass
class GetAllProductsV2Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    product_responses: Optional[list[shared_productresponse.ProductResponse]] = dataclasses.field(default=None)
    
