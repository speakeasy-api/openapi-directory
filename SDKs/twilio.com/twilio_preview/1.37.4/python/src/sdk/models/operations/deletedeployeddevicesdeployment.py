import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_DEPLOYED_DEVICES_DEPLOYMENT_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class DeleteDeployedDevicesDeploymentPathParams:
    fleet_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FleetSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteDeployedDevicesDeploymentSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteDeployedDevicesDeploymentRequest:
    path_params: DeleteDeployedDevicesDeploymentPathParams = dataclasses.field()
    security: DeleteDeployedDevicesDeploymentSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteDeployedDevicesDeploymentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
