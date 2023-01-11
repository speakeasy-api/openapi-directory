import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import accesstokenvalidationrequest as shared_accesstokenvalidationrequest
from ..shared import accesstokenresponse as shared_accesstokenresponse


@dataclasses.dataclass
class ValidateAccessTokenHeaders:
    authorization: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ValidateAccessTokenRequest:
    headers: ValidateAccessTokenHeaders = dataclasses.field()
    request: shared_accesstokenvalidationrequest.AccessTokenValidationRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ValidateAccessTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_token_response: Optional[shared_accesstokenresponse.AccessTokenResponse] = dataclasses.field(default=None)
    inline_response_401: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    
