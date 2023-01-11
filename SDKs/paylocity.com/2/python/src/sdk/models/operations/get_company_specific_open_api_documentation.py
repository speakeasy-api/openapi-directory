import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import error as shared_error


@dataclasses.dataclass
class GetCompanySpecificOpenAPIDocumentationPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompanySpecificOpenAPIDocumentationHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompanySpecificOpenAPIDocumentationSecurity:
    paylocity_auth: shared_security.SchemePaylocityAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCompanySpecificOpenAPIDocumentationRequest:
    headers: GetCompanySpecificOpenAPIDocumentationHeaders = dataclasses.field()
    path_params: GetCompanySpecificOpenAPIDocumentationPathParams = dataclasses.field()
    security: GetCompanySpecificOpenAPIDocumentationSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCompanySpecificOpenAPIDocumentationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    errors: Optional[list[shared_error.Error]] = dataclasses.field(default=None)
    
