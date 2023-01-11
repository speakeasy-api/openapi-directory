import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_DEPLOYED_DEVICES_KEY_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class DeleteDeployedDevicesKeyPathParams:
    fleet_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FleetSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteDeployedDevicesKeySecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteDeployedDevicesKeyRequest:
    path_params: DeleteDeployedDevicesKeyPathParams = dataclasses.field()
    security: DeleteDeployedDevicesKeySecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteDeployedDevicesKeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
