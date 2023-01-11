import dataclasses
from typing import Optional
from ..shared import hiuconsentnotificationevent as shared_hiuconsentnotificationevent
from ..shared import errorresponse as shared_errorresponse


POST_V0_5_CONSENTS_HIU_NOTIFY_SERVERS = [
	"https://dev.ndhm.gov.in/hiu",
]


@dataclasses.dataclass
class PostV05ConsentsHiuNotifyHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_hiu_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-HIU-ID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostV05ConsentsHiuNotifyRequest:
    headers: PostV05ConsentsHiuNotifyHeaders = dataclasses.field()
    request: shared_hiuconsentnotificationevent.HiuConsentNotificationEvent = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PostV05ConsentsHiuNotifyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
