import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteProductPathParams:
    organization_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    product_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'productUuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteProductSecurity:
    zettle_api_key: Optional[shared_security.SchemeZettleAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    zettle_oauth: Optional[shared_security.SchemeZettleOauth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteProductRequest:
    path_params: DeleteProductPathParams = dataclasses.field()
    security: DeleteProductSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteProductResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
