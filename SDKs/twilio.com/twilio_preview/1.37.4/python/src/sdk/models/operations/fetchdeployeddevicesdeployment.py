import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import preview_deployed_devices_fleet_deployment as shared_preview_deployed_devices_fleet_deployment


FETCH_DEPLOYED_DEVICES_DEPLOYMENT_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class FetchDeployedDevicesDeploymentPathParams:
    fleet_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FleetSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchDeployedDevicesDeploymentSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchDeployedDevicesDeploymentRequest:
    path_params: FetchDeployedDevicesDeploymentPathParams = dataclasses.field()
    security: FetchDeployedDevicesDeploymentSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchDeployedDevicesDeploymentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_deployed_devices_fleet_deployment: Optional[shared_preview_deployed_devices_fleet_deployment.PreviewDeployedDevicesFleetDeployment] = dataclasses.field(default=None)
    
