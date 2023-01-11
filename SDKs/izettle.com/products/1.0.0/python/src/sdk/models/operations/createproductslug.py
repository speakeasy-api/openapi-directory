import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import createslugrequest as shared_createslugrequest
from ..shared import slugresponse as shared_slugresponse


@dataclasses.dataclass
class CreateProductSlugPathParams:
    organization_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateProductSlugSecurity:
    zettle_api_key: Optional[shared_security.SchemeZettleAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    zettle_oauth: Optional[shared_security.SchemeZettleOauth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreateProductSlugRequest:
    path_params: CreateProductSlugPathParams = dataclasses.field()
    request: shared_createslugrequest.CreateSlugRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateProductSlugSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateProductSlugResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    slug_response: Optional[shared_slugresponse.SlugResponse] = dataclasses.field(default=None)
    
