import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import preview_deployed_devices_fleet_certificate as shared_preview_deployed_devices_fleet_certificate


FETCH_DEPLOYED_DEVICES_CERTIFICATE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class FetchDeployedDevicesCertificatePathParams:
    fleet_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FleetSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchDeployedDevicesCertificateSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchDeployedDevicesCertificateRequest:
    path_params: FetchDeployedDevicesCertificatePathParams = dataclasses.field()
    security: FetchDeployedDevicesCertificateSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchDeployedDevicesCertificateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_deployed_devices_fleet_certificate: Optional[shared_preview_deployed_devices_fleet_certificate.PreviewDeployedDevicesFleetCertificate] = dataclasses.field(default=None)
    
