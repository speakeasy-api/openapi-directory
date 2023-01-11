import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import voice_v1_connection_policy_connection_policy_target as shared_voice_v1_connection_policy_connection_policy_target


UPDATE_CONNECTION_POLICY_TARGET_SERVERS = [
	"https://voice.twilio.com",
]


@dataclasses.dataclass
class UpdateConnectionPolicyTargetPathParams:
    connection_policy_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ConnectionPolicySid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest:
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Enabled' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    priority: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Priority' }})
    target: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Target' }})
    weight: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Weight' }})
    

@dataclasses.dataclass
class UpdateConnectionPolicyTargetSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateConnectionPolicyTargetRequest:
    path_params: UpdateConnectionPolicyTargetPathParams = dataclasses.field()
    security: UpdateConnectionPolicyTargetSecurity = dataclasses.field()
    request: Optional[UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateConnectionPolicyTargetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    voice_v1_connection_policy_connection_policy_target: Optional[shared_voice_v1_connection_policy_connection_policy_target.VoiceV1ConnectionPolicyConnectionPolicyTarget] = dataclasses.field(default=None)
    
