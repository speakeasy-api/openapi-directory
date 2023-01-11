import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import productresponse as shared_productresponse


@dataclasses.dataclass
class GetProductPathParams:
    organization_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    product_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'productUuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetProductHeaders:
    if_none_match: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-None-Match', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetProductSecurity:
    zettle_api_key: Optional[shared_security.SchemeZettleAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    zettle_oauth: Optional[shared_security.SchemeZettleOauth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetProductRequest:
    headers: GetProductHeaders = dataclasses.field()
    path_params: GetProductPathParams = dataclasses.field()
    security: GetProductSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetProductResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    product_response: Optional[shared_productresponse.ProductResponse] = dataclasses.field(default=None)
    
