import dataclasses
from typing import Optional
from enum import Enum
from ..shared import apierror as shared_apierror
from ..shared import smsmessageresponse as shared_smsmessageresponse

class SmsMessageRequestBodyOutputCaseEnum(str, Enum):
    CAMEL = "camel"


@dataclasses.dataclass
class SmsMessageRequestBody:
    message: str = dataclasses.field(metadata={'form': { 'field_name': 'message' }})
    number: str = dataclasses.field(metadata={'form': { 'field_name': 'number' }})
    country_code: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'country-code' }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'limit' }})
    limit_ttl: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'limit-ttl' }})
    output_case: Optional[SmsMessageRequestBodyOutputCaseEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'output-case' }})
    

@dataclasses.dataclass
class SmsMessageRequest:
    request: Optional[SmsMessageRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class SmsMessageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    sms_message_response: Optional[shared_smsmessageresponse.SmsMessageResponse] = dataclasses.field(default=None)
    
