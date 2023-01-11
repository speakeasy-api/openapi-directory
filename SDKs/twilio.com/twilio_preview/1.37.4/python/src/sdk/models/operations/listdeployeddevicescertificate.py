import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import preview_deployed_devices_fleet_certificate as shared_preview_deployed_devices_fleet_certificate


LIST_DEPLOYED_DEVICES_CERTIFICATE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class ListDeployedDevicesCertificatePathParams:
    fleet_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FleetSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListDeployedDevicesCertificateQueryParams:
    device_sid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DeviceSid', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListDeployedDevicesCertificateSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListDeployedDevicesCertificateListDeployedDevicesCertificateResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListDeployedDevicesCertificateListDeployedDevicesCertificateResponse:
    certificates: Optional[list[shared_preview_deployed_devices_fleet_certificate.PreviewDeployedDevicesFleetCertificate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificates') }})
    meta: Optional[ListDeployedDevicesCertificateListDeployedDevicesCertificateResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class ListDeployedDevicesCertificateRequest:
    path_params: ListDeployedDevicesCertificatePathParams = dataclasses.field()
    query_params: ListDeployedDevicesCertificateQueryParams = dataclasses.field()
    security: ListDeployedDevicesCertificateSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListDeployedDevicesCertificateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_deployed_devices_certificate_response: Optional[ListDeployedDevicesCertificateListDeployedDevicesCertificateResponse] = dataclasses.field(default=None)
    
