import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import voice_v1_connection_policy_connection_policy_target as shared_voice_v1_connection_policy_connection_policy_target


FETCH_CONNECTION_POLICY_TARGET_SERVERS = [
	"https://voice.twilio.com",
]


@dataclasses.dataclass
class FetchConnectionPolicyTargetPathParams:
    connection_policy_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ConnectionPolicySid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchConnectionPolicyTargetSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchConnectionPolicyTargetRequest:
    path_params: FetchConnectionPolicyTargetPathParams = dataclasses.field()
    security: FetchConnectionPolicyTargetSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchConnectionPolicyTargetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    voice_v1_connection_policy_connection_policy_target: Optional[shared_voice_v1_connection_policy_connection_policy_target.VoiceV1ConnectionPolicyConnectionPolicyTarget] = dataclasses.field(default=None)
    
