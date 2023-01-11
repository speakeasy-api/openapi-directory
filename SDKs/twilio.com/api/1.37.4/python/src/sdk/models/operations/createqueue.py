import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import api_v2010_account_queue as shared_api_v2010_account_queue


CREATE_QUEUE_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class CreateQueuePathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateQueueCreateQueueRequest:
    friendly_name: str = dataclasses.field(metadata={'form': { 'field_name': 'FriendlyName' }})
    max_size: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'MaxSize' }})
    

@dataclasses.dataclass
class CreateQueueSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateQueueRequest:
    path_params: CreateQueuePathParams = dataclasses.field()
    security: CreateQueueSecurity = dataclasses.field()
    request: Optional[CreateQueueCreateQueueRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateQueueResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_queue: Optional[shared_api_v2010_account_queue.APIV2010AccountQueue] = dataclasses.field(default=None)
    
