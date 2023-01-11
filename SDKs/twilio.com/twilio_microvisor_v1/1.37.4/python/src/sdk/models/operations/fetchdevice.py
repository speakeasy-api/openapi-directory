import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import microvisor_v1_device as shared_microvisor_v1_device


FETCH_DEVICE_SERVERS = [
	"https://microvisor.twilio.com",
]


@dataclasses.dataclass
class FetchDevicePathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchDeviceSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchDeviceRequest:
    path_params: FetchDevicePathParams = dataclasses.field()
    security: FetchDeviceSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchDeviceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    microvisor_v1_device: Optional[shared_microvisor_v1_device.MicrovisorV1Device] = dataclasses.field(default=None)
    
