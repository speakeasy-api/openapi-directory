import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import voice_v1_connection_policy as shared_voice_v1_connection_policy


FETCH_CONNECTION_POLICY_SERVERS = [
	"https://voice.twilio.com",
]


@dataclasses.dataclass
class FetchConnectionPolicyPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchConnectionPolicySecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchConnectionPolicyRequest:
    path_params: FetchConnectionPolicyPathParams = dataclasses.field()
    security: FetchConnectionPolicySecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchConnectionPolicyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    voice_v1_connection_policy: Optional[shared_voice_v1_connection_policy.VoiceV1ConnectionPolicy] = dataclasses.field(default=None)
    
