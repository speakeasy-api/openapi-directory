import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import selfupdatepasswordrequest as shared_selfupdatepasswordrequest


@dataclasses.dataclass
class UpdatePasswordSelfRequest:
    request: shared_selfupdatepasswordrequest.SelfUpdatePasswordRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdatePasswordSelfResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    inline_response_400: Optional[Any] = dataclasses.field(default=None)
    inline_response_401: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    
