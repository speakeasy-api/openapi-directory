from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_BINDING_SERVERS = [
	"https://notify.twilio.com",
]


@dataclass
class FetchBindingPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchBindingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchBindingRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchBindingPathParams = field(default=None)
    security: FetchBindingSecurity = field(default=None)
    

@dataclass
class FetchBindingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    notify_v1_service_binding: Optional[shared.NotifyV1ServiceBinding] = field(default=None)
    
