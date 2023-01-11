import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import messaging_v1_usecase as shared_messaging_v1_usecase


FETCH_USECASE_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclasses.dataclass
class FetchUsecaseSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchUsecaseRequest:
    security: FetchUsecaseSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchUsecaseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    messaging_v1_usecase: Optional[shared_messaging_v1_usecase.MessagingV1Usecase] = dataclasses.field(default=None)
    
