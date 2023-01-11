import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import preview_deployed_devices_fleet_deployment as shared_preview_deployed_devices_fleet_deployment


UPDATE_DEPLOYED_DEVICES_DEPLOYMENT_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class UpdateDeployedDevicesDeploymentPathParams:
    fleet_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FleetSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateDeployedDevicesDeploymentUpdateDeployedDevicesDeploymentRequest:
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    sync_service_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SyncServiceSid' }})
    

@dataclasses.dataclass
class UpdateDeployedDevicesDeploymentSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateDeployedDevicesDeploymentRequest:
    path_params: UpdateDeployedDevicesDeploymentPathParams = dataclasses.field()
    security: UpdateDeployedDevicesDeploymentSecurity = dataclasses.field()
    request: Optional[UpdateDeployedDevicesDeploymentUpdateDeployedDevicesDeploymentRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateDeployedDevicesDeploymentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_deployed_devices_fleet_deployment: Optional[shared_preview_deployed_devices_fleet_deployment.PreviewDeployedDevicesFleetDeployment] = dataclasses.field(default=None)
    
