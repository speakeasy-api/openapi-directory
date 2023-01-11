import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import api_v2010_account_queue_member as shared_api_v2010_account_queue_member


FETCH_MEMBER_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class FetchMemberPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    call_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    queue_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'QueueSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchMemberSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchMemberRequest:
    path_params: FetchMemberPathParams = dataclasses.field()
    security: FetchMemberSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchMemberResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_queue_member: Optional[shared_api_v2010_account_queue_member.APIV2010AccountQueueMember] = dataclasses.field(default=None)
    
