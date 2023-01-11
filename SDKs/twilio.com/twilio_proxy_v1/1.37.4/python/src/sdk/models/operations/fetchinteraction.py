import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import proxy_v1_service_session_interaction as shared_proxy_v1_service_session_interaction


FETCH_INTERACTION_SERVERS = [
	"https://proxy.twilio.com",
]


@dataclasses.dataclass
class FetchInteractionPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    session_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'SessionSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchInteractionSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchInteractionRequest:
    path_params: FetchInteractionPathParams = dataclasses.field()
    security: FetchInteractionSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchInteractionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    proxy_v1_service_session_interaction: Optional[shared_proxy_v1_service_session_interaction.ProxyV1ServiceSessionInteraction] = dataclasses.field(default=None)
    
