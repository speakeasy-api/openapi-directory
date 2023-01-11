import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_CONNECTION_POLICY_TARGET_SERVERS = [
	"https://voice.twilio.com",
]


@dataclasses.dataclass
class DeleteConnectionPolicyTargetPathParams:
    connection_policy_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ConnectionPolicySid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteConnectionPolicyTargetSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteConnectionPolicyTargetRequest:
    path_params: DeleteConnectionPolicyTargetPathParams = dataclasses.field()
    security: DeleteConnectionPolicyTargetSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteConnectionPolicyTargetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
