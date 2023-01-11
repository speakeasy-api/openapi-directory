import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteProductsPathParams:
    organization_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteProductsQueryParams:
    uuid: list[str] = dataclasses.field(metadata={'query_param': { 'field_name': 'uuid', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeleteProductsSecurity:
    zettle_api_key: Optional[shared_security.SchemeZettleAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    zettle_oauth: Optional[shared_security.SchemeZettleOauth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteProductsRequest:
    path_params: DeleteProductsPathParams = dataclasses.field()
    query_params: DeleteProductsQueryParams = dataclasses.field()
    security: DeleteProductsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteProductsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
