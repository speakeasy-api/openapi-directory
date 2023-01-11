import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import chat_v2_service_binding as shared_chat_v2_service_binding


FETCH_BINDING_SERVERS = [
	"https://chat.twilio.com",
]


@dataclasses.dataclass
class FetchBindingPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchBindingSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchBindingRequest:
    path_params: FetchBindingPathParams = dataclasses.field()
    security: FetchBindingSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchBindingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    chat_v2_service_binding: Optional[shared_chat_v2_service_binding.ChatV2ServiceBinding] = dataclasses.field(default=None)
    
