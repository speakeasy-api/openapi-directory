import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import voice_v1_connection_policy as shared_voice_v1_connection_policy


UPDATE_CONNECTION_POLICY_SERVERS = [
	"https://voice.twilio.com",
]


@dataclasses.dataclass
class UpdateConnectionPolicyPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateConnectionPolicyUpdateConnectionPolicyRequest:
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclasses.dataclass
class UpdateConnectionPolicySecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateConnectionPolicyRequest:
    path_params: UpdateConnectionPolicyPathParams = dataclasses.field()
    security: UpdateConnectionPolicySecurity = dataclasses.field()
    request: Optional[UpdateConnectionPolicyUpdateConnectionPolicyRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateConnectionPolicyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    voice_v1_connection_policy: Optional[shared_voice_v1_connection_policy.VoiceV1ConnectionPolicy] = dataclasses.field(default=None)
    
