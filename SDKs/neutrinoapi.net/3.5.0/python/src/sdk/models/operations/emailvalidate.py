import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import apierror as shared_apierror
from ..shared import emailvalidateresponse as shared_emailvalidateresponse

class EmailValidateRequestBodyOutputCaseEnum(str, Enum):
    CAMEL = "camel"


@dataclasses.dataclass
class EmailValidateRequestBody:
    email: str = dataclasses.field(metadata={'form': { 'field_name': 'email' }})
    fix_typos: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'fix-typos' }})
    output_case: Optional[EmailValidateRequestBodyOutputCaseEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'output-case' }})
    

@dataclasses.dataclass
class EmailValidateRequest:
    request: Optional[EmailValidateRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class EmailValidateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    email_validate_response: Optional[shared_emailvalidateresponse.EmailValidateResponse] = dataclasses.field(default=None)
    
