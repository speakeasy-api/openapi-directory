import dataclasses
from typing import Optional
from enum import Enum
from ..shared import apierror as shared_apierror
from ..shared import verifysecuritycoderesponse as shared_verifysecuritycoderesponse

class VerifySecurityCodeRequestBodyOutputCaseEnum(str, Enum):
    CAMEL = "camel"


@dataclasses.dataclass
class VerifySecurityCodeRequestBody:
    security_code: str = dataclasses.field(metadata={'form': { 'field_name': 'security-code' }})
    limit_by: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'limit-by' }})
    output_case: Optional[VerifySecurityCodeRequestBodyOutputCaseEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'output-case' }})
    

@dataclasses.dataclass
class VerifySecurityCodeRequest:
    request: Optional[VerifySecurityCodeRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class VerifySecurityCodeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    verify_security_code_response: Optional[shared_verifysecuritycoderesponse.VerifySecurityCodeResponse] = dataclasses.field(default=None)
    
