import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import preview_deployed_devices_fleet_key as shared_preview_deployed_devices_fleet_key


CREATE_DEPLOYED_DEVICES_KEY_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class CreateDeployedDevicesKeyPathParams:
    fleet_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FleetSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateDeployedDevicesKeyCreateDeployedDevicesKeyRequest:
    device_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DeviceSid' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclasses.dataclass
class CreateDeployedDevicesKeySecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateDeployedDevicesKeyRequest:
    path_params: CreateDeployedDevicesKeyPathParams = dataclasses.field()
    security: CreateDeployedDevicesKeySecurity = dataclasses.field()
    request: Optional[CreateDeployedDevicesKeyCreateDeployedDevicesKeyRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateDeployedDevicesKeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_deployed_devices_fleet_key: Optional[shared_preview_deployed_devices_fleet_key.PreviewDeployedDevicesFleetKey] = dataclasses.field(default=None)
    
