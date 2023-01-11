import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import preview_deployed_devices_fleet_device as shared_preview_deployed_devices_fleet_device


CREATE_DEPLOYED_DEVICES_DEVICE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class CreateDeployedDevicesDevicePathParams:
    fleet_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FleetSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateDeployedDevicesDeviceCreateDeployedDevicesDeviceRequest:
    deployment_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DeploymentSid' }})
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Enabled' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    identity: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Identity' }})
    unique_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclasses.dataclass
class CreateDeployedDevicesDeviceSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateDeployedDevicesDeviceRequest:
    path_params: CreateDeployedDevicesDevicePathParams = dataclasses.field()
    security: CreateDeployedDevicesDeviceSecurity = dataclasses.field()
    request: Optional[CreateDeployedDevicesDeviceCreateDeployedDevicesDeviceRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateDeployedDevicesDeviceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_deployed_devices_fleet_device: Optional[shared_preview_deployed_devices_fleet_device.PreviewDeployedDevicesFleetDevice] = dataclasses.field(default=None)
    
