import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import companycodes as shared_companycodes
from ..shared import error as shared_error


@dataclasses.dataclass
class GetAllCompanyCodesAndDescriptionsByResourcePathParams:
    code_resource: str = dataclasses.field(metadata={'path_param': { 'field_name': 'codeResource', 'style': 'simple', 'explode': False }})
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAllCompanyCodesAndDescriptionsByResourceSecurity:
    paylocity_auth: shared_security.SchemePaylocityAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetAllCompanyCodesAndDescriptionsByResourceRequest:
    path_params: GetAllCompanyCodesAndDescriptionsByResourcePathParams = dataclasses.field()
    security: GetAllCompanyCodesAndDescriptionsByResourceSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAllCompanyCodesAndDescriptionsByResourceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    company_codes: Optional[list[shared_companycodes.CompanyCodes]] = dataclasses.field(default=None)
    errors: Optional[list[shared_error.Error]] = dataclasses.field(default=None)
    
