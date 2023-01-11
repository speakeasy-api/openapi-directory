import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import categoryrequest as shared_categoryrequest


@dataclasses.dataclass
class CreateCategoriesPathParams:
    organization_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateCategoriesSecurity:
    zettle_api_key: Optional[shared_security.SchemeZettleAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    zettle_oauth: Optional[shared_security.SchemeZettleOauth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreateCategoriesRequest:
    path_params: CreateCategoriesPathParams = dataclasses.field()
    request: shared_categoryrequest.CategoryRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateCategoriesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateCategoriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
