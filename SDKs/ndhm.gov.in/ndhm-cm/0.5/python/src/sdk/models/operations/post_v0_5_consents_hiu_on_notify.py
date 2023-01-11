import dataclasses
from typing import Optional
from ..shared import hiuconsentnotificationresponse as shared_hiuconsentnotificationresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class PostV05ConsentsHiuOnNotifyHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostV05ConsentsHiuOnNotifyRequest:
    headers: PostV05ConsentsHiuOnNotifyHeaders = dataclasses.field()
    request: shared_hiuconsentnotificationresponse.HiuConsentNotificationResponse = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostV05ConsentsHiuOnNotifyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
