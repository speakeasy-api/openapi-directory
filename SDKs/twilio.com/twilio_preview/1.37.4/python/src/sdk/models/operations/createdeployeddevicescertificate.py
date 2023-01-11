import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import preview_deployed_devices_fleet_certificate as shared_preview_deployed_devices_fleet_certificate


CREATE_DEPLOYED_DEVICES_CERTIFICATE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class CreateDeployedDevicesCertificatePathParams:
    fleet_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FleetSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateDeployedDevicesCertificateCreateDeployedDevicesCertificateRequest:
    certificate_data: str = dataclasses.field(metadata={'form': { 'field_name': 'CertificateData' }})
    device_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DeviceSid' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclasses.dataclass
class CreateDeployedDevicesCertificateSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateDeployedDevicesCertificateRequest:
    path_params: CreateDeployedDevicesCertificatePathParams = dataclasses.field()
    security: CreateDeployedDevicesCertificateSecurity = dataclasses.field()
    request: Optional[CreateDeployedDevicesCertificateCreateDeployedDevicesCertificateRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateDeployedDevicesCertificateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_deployed_devices_fleet_certificate: Optional[shared_preview_deployed_devices_fleet_certificate.PreviewDeployedDevicesFleetCertificate] = dataclasses.field(default=None)
    
