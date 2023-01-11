import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import templateresponse as shared_templateresponse


@dataclasses.dataclass
class TemplatesUpdatePathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    template_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'templateId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TemplatesUpdateSecurity:
    sakari_auth: shared_security.SchemeSakariAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class TemplatesUpdateRequest:
    path_params: TemplatesUpdatePathParams = dataclasses.field()
    security: TemplatesUpdateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class TemplatesUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    template_response: Optional[shared_templateresponse.TemplateResponse] = dataclasses.field(default=None)
    
