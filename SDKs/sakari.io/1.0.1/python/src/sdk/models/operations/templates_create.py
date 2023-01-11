import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import templaterequest as shared_templaterequest
from ..shared import templatesresponse as shared_templatesresponse


@dataclasses.dataclass
class TemplatesCreatePathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TemplatesCreateSecurity:
    sakari_auth: shared_security.SchemeSakariAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class TemplatesCreateRequest:
    path_params: TemplatesCreatePathParams = dataclasses.field()
    security: TemplatesCreateSecurity = dataclasses.field()
    request: Optional[shared_templaterequest.TemplateRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class TemplatesCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    templates_response: Optional[shared_templatesresponse.TemplatesResponse] = dataclasses.field(default=None)
    
