import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import productcreaterequest as shared_productcreaterequest
from ..shared import productresponse as shared_productresponse


@dataclasses.dataclass
class CreateProductPathParams:
    organization_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateProductQueryParams:
    return_entity: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'returnEntity', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CreateProductSecurity:
    zettle_api_key: Optional[shared_security.SchemeZettleAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    zettle_oauth: Optional[shared_security.SchemeZettleOauth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreateProductRequest:
    path_params: CreateProductPathParams = dataclasses.field()
    query_params: CreateProductQueryParams = dataclasses.field()
    request: shared_productcreaterequest.ProductCreateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateProductSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateProductResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    product_response: Optional[shared_productresponse.ProductResponse] = dataclasses.field(default=None)
    
