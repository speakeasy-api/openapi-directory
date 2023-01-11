import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import voice_v1_connection_policy as shared_voice_v1_connection_policy


CREATE_CONNECTION_POLICY_SERVERS = [
	"https://voice.twilio.com",
]


@dataclasses.dataclass
class CreateConnectionPolicyCreateConnectionPolicyRequest:
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclasses.dataclass
class CreateConnectionPolicySecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateConnectionPolicyRequest:
    security: CreateConnectionPolicySecurity = dataclasses.field()
    request: Optional[CreateConnectionPolicyCreateConnectionPolicyRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateConnectionPolicyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    voice_v1_connection_policy: Optional[shared_voice_v1_connection_policy.VoiceV1ConnectionPolicy] = dataclasses.field(default=None)
    
