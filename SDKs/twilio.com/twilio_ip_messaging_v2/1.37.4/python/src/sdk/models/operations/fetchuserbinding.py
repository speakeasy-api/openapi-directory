import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import ip_messaging_v2_service_user_user_binding as shared_ip_messaging_v2_service_user_user_binding


FETCH_USER_BINDING_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclasses.dataclass
class FetchUserBindingPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    user_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'UserSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchUserBindingSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchUserBindingRequest:
    path_params: FetchUserBindingPathParams = dataclasses.field()
    security: FetchUserBindingSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchUserBindingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    ip_messaging_v2_service_user_user_binding: Optional[shared_ip_messaging_v2_service_user_user_binding.IPMessagingV2ServiceUserUserBinding] = dataclasses.field(default=None)
    
