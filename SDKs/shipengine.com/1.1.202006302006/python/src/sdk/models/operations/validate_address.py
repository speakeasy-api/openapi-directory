import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import address_to_validate as shared_address_to_validate
from ..shared import error_response_body as shared_error_response_body
from ..shared import validate_address_response_body as shared_validate_address_response_body


@dataclasses.dataclass
class ValidateAddressRequest:
    request: list[shared_address_to_validate.AddressToValidate] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ValidateAddressResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    validate_address_response_body: Optional[list[shared_validate_address_response_body.ValidateAddressResponseBody]] = dataclasses.field(default=None)
    
