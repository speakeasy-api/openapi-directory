import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import preview_deployed_devices_fleet_certificate as shared_preview_deployed_devices_fleet_certificate


UPDATE_DEPLOYED_DEVICES_CERTIFICATE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class UpdateDeployedDevicesCertificatePathParams:
    fleet_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FleetSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateDeployedDevicesCertificateUpdateDeployedDevicesCertificateRequest:
    device_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DeviceSid' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclasses.dataclass
class UpdateDeployedDevicesCertificateSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateDeployedDevicesCertificateRequest:
    path_params: UpdateDeployedDevicesCertificatePathParams = dataclasses.field()
    security: UpdateDeployedDevicesCertificateSecurity = dataclasses.field()
    request: Optional[UpdateDeployedDevicesCertificateUpdateDeployedDevicesCertificateRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateDeployedDevicesCertificateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_deployed_devices_fleet_certificate: Optional[shared_preview_deployed_devices_fleet_certificate.PreviewDeployedDevicesFleetCertificate] = dataclasses.field(default=None)
    
