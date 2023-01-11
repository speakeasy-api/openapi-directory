import dataclasses
from typing import Optional
from enum import Enum
from ..shared import apierror as shared_apierror
from ..shared import smsverifyresponse as shared_smsverifyresponse

class SmsVerifyRequestBodyOutputCaseEnum(str, Enum):
    CAMEL = "camel"


@dataclasses.dataclass
class SmsVerifyRequestBody:
    number: str = dataclasses.field(metadata={'form': { 'field_name': 'number' }})
    code_length: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'code-length' }})
    country_code: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'country-code' }})
    language_code: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'language-code' }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'limit' }})
    limit_ttl: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'limit-ttl' }})
    output_case: Optional[SmsVerifyRequestBodyOutputCaseEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'output-case' }})
    security_code: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'security-code' }})
    

@dataclasses.dataclass
class SmsVerifyRequest:
    request: Optional[SmsVerifyRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class SmsVerifyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    sms_verify_response: Optional[shared_smsverifyresponse.SmsVerifyResponse] = dataclasses.field(default=None)
    
