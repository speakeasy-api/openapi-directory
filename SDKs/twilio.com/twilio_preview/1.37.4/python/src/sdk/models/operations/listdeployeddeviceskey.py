import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import preview_deployed_devices_fleet_key as shared_preview_deployed_devices_fleet_key


LIST_DEPLOYED_DEVICES_KEY_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class ListDeployedDevicesKeyPathParams:
    fleet_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FleetSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListDeployedDevicesKeyQueryParams:
    device_sid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DeviceSid', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListDeployedDevicesKeySecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListDeployedDevicesKeyListDeployedDevicesKeyResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListDeployedDevicesKeyListDeployedDevicesKeyResponse:
    keys: Optional[list[shared_preview_deployed_devices_fleet_key.PreviewDeployedDevicesFleetKey]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keys') }})
    meta: Optional[ListDeployedDevicesKeyListDeployedDevicesKeyResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class ListDeployedDevicesKeyRequest:
    path_params: ListDeployedDevicesKeyPathParams = dataclasses.field()
    query_params: ListDeployedDevicesKeyQueryParams = dataclasses.field()
    security: ListDeployedDevicesKeySecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListDeployedDevicesKeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_deployed_devices_key_response: Optional[ListDeployedDevicesKeyListDeployedDevicesKeyResponse] = dataclasses.field(default=None)
    
