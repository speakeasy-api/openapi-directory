import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import api_v2010_account_queue as shared_api_v2010_account_queue


FETCH_QUEUE_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class FetchQueuePathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchQueueSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchQueueRequest:
    path_params: FetchQueuePathParams = dataclasses.field()
    security: FetchQueueSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchQueueResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_queue: Optional[shared_api_v2010_account_queue.APIV2010AccountQueue] = dataclasses.field(default=None)
    
