import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import errortemplate as shared_errortemplate


@dataclasses.dataclass
class UpdateServiceTemplatePathParams:
    service_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateServiceTemplateSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateServiceTemplateRequest:
    path_params: UpdateServiceTemplatePathParams = dataclasses.field()
    security: UpdateServiceTemplateSecurity = dataclasses.field()
    request: Optional[shared_errortemplate.ErrorTemplate] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateServiceTemplateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_template: Optional[shared_errortemplate.ErrorTemplate] = dataclasses.field(default=None)
    
