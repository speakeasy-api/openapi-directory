import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import preview_deployed_devices_fleet_key as shared_preview_deployed_devices_fleet_key


FETCH_DEPLOYED_DEVICES_KEY_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class FetchDeployedDevicesKeyPathParams:
    fleet_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FleetSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchDeployedDevicesKeySecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchDeployedDevicesKeyRequest:
    path_params: FetchDeployedDevicesKeyPathParams = dataclasses.field()
    security: FetchDeployedDevicesKeySecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchDeployedDevicesKeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_deployed_devices_fleet_key: Optional[shared_preview_deployed_devices_fleet_key.PreviewDeployedDevicesFleetKey] = dataclasses.field(default=None)
    
