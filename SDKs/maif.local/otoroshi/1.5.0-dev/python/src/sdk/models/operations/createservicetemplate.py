import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import errortemplate as shared_errortemplate


@dataclasses.dataclass
class CreateServiceTemplatePathParams:
    service_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateServiceTemplateSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateServiceTemplateRequest:
    path_params: CreateServiceTemplatePathParams = dataclasses.field()
    security: CreateServiceTemplateSecurity = dataclasses.field()
    request: Optional[shared_errortemplate.ErrorTemplate] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateServiceTemplateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_template: Optional[shared_errortemplate.ErrorTemplate] = dataclasses.field(default=None)
    
