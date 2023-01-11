import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import errorresponse as shared_errorresponse
from ..shared import templatesresponse as shared_templatesresponse


@dataclasses.dataclass
class TemplatesFetchAllPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TemplatesFetchAllQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TemplatesFetchAllSecurity:
    sakari_auth: shared_security.SchemeSakariAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class TemplatesFetchAllRequest:
    path_params: TemplatesFetchAllPathParams = dataclasses.field()
    query_params: TemplatesFetchAllQueryParams = dataclasses.field()
    security: TemplatesFetchAllSecurity = dataclasses.field()
    

@dataclasses.dataclass
class TemplatesFetchAllResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    templates_response: Optional[shared_templatesresponse.TemplatesResponse] = dataclasses.field(default=None)
    
