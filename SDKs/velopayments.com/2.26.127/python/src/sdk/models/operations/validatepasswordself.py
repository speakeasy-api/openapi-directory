import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import passwordrequest as shared_passwordrequest
from ..shared import validatepasswordresponse as shared_validatepasswordresponse


@dataclasses.dataclass
class ValidatePasswordSelfRequest:
    request: shared_passwordrequest.PasswordRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ValidatePasswordSelfResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    validate_password_response: Optional[shared_validatepasswordresponse.ValidatePasswordResponse] = dataclasses.field(default=None)
    inline_response_400: Optional[Any] = dataclasses.field(default=None)
    inline_response_401: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    
