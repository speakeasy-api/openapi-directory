import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import preview_deployed_devices_fleet as shared_preview_deployed_devices_fleet


UPDATE_DEPLOYED_DEVICES_FLEET_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class UpdateDeployedDevicesFleetPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateDeployedDevicesFleetUpdateDeployedDevicesFleetRequest:
    default_deployment_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DefaultDeploymentSid' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclasses.dataclass
class UpdateDeployedDevicesFleetSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateDeployedDevicesFleetRequest:
    path_params: UpdateDeployedDevicesFleetPathParams = dataclasses.field()
    security: UpdateDeployedDevicesFleetSecurity = dataclasses.field()
    request: Optional[UpdateDeployedDevicesFleetUpdateDeployedDevicesFleetRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateDeployedDevicesFleetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_deployed_devices_fleet: Optional[shared_preview_deployed_devices_fleet.PreviewDeployedDevicesFleet] = dataclasses.field(default=None)
    
