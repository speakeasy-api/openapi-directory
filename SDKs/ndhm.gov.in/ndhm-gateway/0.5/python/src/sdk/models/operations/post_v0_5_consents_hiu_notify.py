import dataclasses
from typing import Optional
from ..shared import hiuconsentnotificationevent as shared_hiuconsentnotificationevent
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class PostV05ConsentsHiuNotifyHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_hiu_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-HIU-ID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostV05ConsentsHiuNotifyRequest:
    headers: PostV05ConsentsHiuNotifyHeaders = dataclasses.field()
    request: shared_hiuconsentnotificationevent.HiuConsentNotificationEvent = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostV05ConsentsHiuNotifyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
