import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_MEMBER_SERVERS = [
	"https://chat.twilio.com",
]


@dataclasses.dataclass
class DeleteMemberPathParams:
    channel_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteMemberSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteMemberRequest:
    path_params: DeleteMemberPathParams = dataclasses.field()
    security: DeleteMemberSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteMemberResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
