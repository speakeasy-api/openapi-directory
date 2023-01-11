import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import preview_deployed_devices_fleet as shared_preview_deployed_devices_fleet


CREATE_DEPLOYED_DEVICES_FLEET_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class CreateDeployedDevicesFleetCreateDeployedDevicesFleetRequest:
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclasses.dataclass
class CreateDeployedDevicesFleetSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateDeployedDevicesFleetRequest:
    security: CreateDeployedDevicesFleetSecurity = dataclasses.field()
    request: Optional[CreateDeployedDevicesFleetCreateDeployedDevicesFleetRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateDeployedDevicesFleetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_deployed_devices_fleet: Optional[shared_preview_deployed_devices_fleet.PreviewDeployedDevicesFleet] = dataclasses.field(default=None)
    
