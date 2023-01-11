import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import payeeuserselfupdaterequest as shared_payeeuserselfupdaterequest


@dataclasses.dataclass
class UserDetailsUpdateForSelfRequest:
    request: shared_payeeuserselfupdaterequest.PayeeUserSelfUpdateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UserDetailsUpdateForSelfResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    inline_response_400: Optional[Any] = dataclasses.field(default=None)
    inline_response_401: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    inline_response_409: Optional[Any] = dataclasses.field(default=None)
    
