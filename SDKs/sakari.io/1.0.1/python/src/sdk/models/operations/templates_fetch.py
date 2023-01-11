import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import templateresponse as shared_templateresponse


@dataclasses.dataclass
class TemplatesFetchPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    template_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'templateId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TemplatesFetchSecurity:
    sakari_auth: shared_security.SchemeSakariAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class TemplatesFetchRequest:
    path_params: TemplatesFetchPathParams = dataclasses.field()
    security: TemplatesFetchSecurity = dataclasses.field()
    

@dataclasses.dataclass
class TemplatesFetchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    template_response: Optional[shared_templateresponse.TemplateResponse] = dataclasses.field(default=None)
    
