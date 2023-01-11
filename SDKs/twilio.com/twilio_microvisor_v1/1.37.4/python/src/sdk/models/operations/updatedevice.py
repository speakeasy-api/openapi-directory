import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import microvisor_v1_device as shared_microvisor_v1_device


UPDATE_DEVICE_SERVERS = [
	"https://microvisor.twilio.com",
]


@dataclasses.dataclass
class UpdateDevicePathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateDeviceUpdateDeviceRequest:
    logging_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'LoggingEnabled' }})
    target_app: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'TargetApp' }})
    unique_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclasses.dataclass
class UpdateDeviceSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateDeviceRequest:
    path_params: UpdateDevicePathParams = dataclasses.field()
    security: UpdateDeviceSecurity = dataclasses.field()
    request: Optional[UpdateDeviceUpdateDeviceRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateDeviceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    microvisor_v1_device: Optional[shared_microvisor_v1_device.MicrovisorV1Device] = dataclasses.field(default=None)
    
