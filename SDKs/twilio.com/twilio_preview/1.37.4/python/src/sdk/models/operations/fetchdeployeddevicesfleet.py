import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import preview_deployed_devices_fleet as shared_preview_deployed_devices_fleet


FETCH_DEPLOYED_DEVICES_FLEET_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class FetchDeployedDevicesFleetPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchDeployedDevicesFleetSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchDeployedDevicesFleetRequest:
    path_params: FetchDeployedDevicesFleetPathParams = dataclasses.field()
    security: FetchDeployedDevicesFleetSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchDeployedDevicesFleetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_deployed_devices_fleet: Optional[shared_preview_deployed_devices_fleet.PreviewDeployedDevicesFleet] = dataclasses.field(default=None)
    
