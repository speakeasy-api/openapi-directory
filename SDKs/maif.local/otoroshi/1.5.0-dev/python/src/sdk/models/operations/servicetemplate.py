import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import errortemplate as shared_errortemplate


@dataclasses.dataclass
class ServiceTemplatePathParams:
    service_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ServiceTemplateSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class ServiceTemplateRequest:
    path_params: ServiceTemplatePathParams = dataclasses.field()
    security: ServiceTemplateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ServiceTemplateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_template: Optional[shared_errortemplate.ErrorTemplate] = dataclasses.field(default=None)
    
