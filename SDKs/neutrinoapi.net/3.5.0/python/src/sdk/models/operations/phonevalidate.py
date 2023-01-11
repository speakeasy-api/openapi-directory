import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import apierror as shared_apierror
from ..shared import phonevalidateresponse as shared_phonevalidateresponse

class PhoneValidateRequestBodyOutputCaseEnum(str, Enum):
    CAMEL = "camel"


@dataclasses.dataclass
class PhoneValidateRequestBody:
    number: str = dataclasses.field(metadata={'form': { 'field_name': 'number' }})
    country_code: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'country-code' }})
    ip: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ip' }})
    output_case: Optional[PhoneValidateRequestBodyOutputCaseEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'output-case' }})
    

@dataclasses.dataclass
class PhoneValidateRequest:
    request: Optional[PhoneValidateRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class PhoneValidateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    phone_validate_response: Optional[shared_phonevalidateresponse.PhoneValidateResponse] = dataclasses.field(default=None)
    
