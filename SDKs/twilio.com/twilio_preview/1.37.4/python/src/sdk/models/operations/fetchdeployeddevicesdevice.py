import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import preview_deployed_devices_fleet_device as shared_preview_deployed_devices_fleet_device


FETCH_DEPLOYED_DEVICES_DEVICE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class FetchDeployedDevicesDevicePathParams:
    fleet_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FleetSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchDeployedDevicesDeviceSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchDeployedDevicesDeviceRequest:
    path_params: FetchDeployedDevicesDevicePathParams = dataclasses.field()
    security: FetchDeployedDevicesDeviceSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchDeployedDevicesDeviceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_deployed_devices_fleet_device: Optional[shared_preview_deployed_devices_fleet_device.PreviewDeployedDevicesFleetDevice] = dataclasses.field(default=None)
    
