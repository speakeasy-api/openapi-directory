import dataclasses
from typing import Optional
from enum import Enum
from ..shared import apierror as shared_apierror
from ..shared import emailverifyresponse as shared_emailverifyresponse

class EmailVerifyRequestBodyOutputCaseEnum(str, Enum):
    CAMEL = "camel"


@dataclasses.dataclass
class EmailVerifyRequestBody:
    email: str = dataclasses.field(metadata={'form': { 'field_name': 'email' }})
    fix_typos: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'fix-typos' }})
    output_case: Optional[EmailVerifyRequestBodyOutputCaseEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'output-case' }})
    

@dataclasses.dataclass
class EmailVerifyRequest:
    request: Optional[EmailVerifyRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class EmailVerifyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    email_verify_response: Optional[shared_emailverifyresponse.EmailVerifyResponse] = dataclasses.field(default=None)
    
