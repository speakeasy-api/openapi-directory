import dataclasses
from typing import Optional
from ..shared import sendtokenrequest as shared_sendtokenrequest
from ..shared import error as shared_error
from ..shared import sendtokenresponse as shared_sendtokenresponse


@dataclasses.dataclass
class SendTokenRequest:
    request: shared_sendtokenrequest.SendTokenRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SendTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    send_token_response: Optional[shared_sendtokenresponse.SendTokenResponse] = dataclasses.field(default=None)
    
