import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import categoryresponse as shared_categoryresponse


@dataclasses.dataclass
class GetProductTypesPathParams:
    organization_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetProductTypesSecurity:
    zettle_api_key: Optional[shared_security.SchemeZettleAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    zettle_oauth: Optional[shared_security.SchemeZettleOauth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetProductTypesRequest:
    path_params: GetProductTypesPathParams = dataclasses.field()
    security: GetProductTypesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetProductTypesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    category_response: Optional[shared_categoryresponse.CategoryResponse] = dataclasses.field(default=None)
    
