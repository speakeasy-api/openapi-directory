import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetRegistryV2DevicesDeviceOrExternalIDPathParams:
    device_or_external_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'deviceOrExternalId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRegistryV2DevicesDeviceOrExternalIDQueryParams:
    app_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'appId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRegistryV2DevicesDeviceOrExternalIDHeaders:
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRegistryV2DevicesDeviceOrExternalIDSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class GetRegistryV2DevicesDeviceOrExternalID200ApplicationJSON:
    tracking_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingId') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRegistryV2DevicesDeviceOrExternalID400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRegistryV2DevicesDeviceOrExternalID401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRegistryV2DevicesDeviceOrExternalID403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRegistryV2DevicesDeviceOrExternalID404ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class GetRegistryV2DevicesDeviceOrExternalIDRequest:
    headers: GetRegistryV2DevicesDeviceOrExternalIDHeaders = dataclasses.field()
    path_params: GetRegistryV2DevicesDeviceOrExternalIDPathParams = dataclasses.field()
    query_params: GetRegistryV2DevicesDeviceOrExternalIDQueryParams = dataclasses.field()
    security: GetRegistryV2DevicesDeviceOrExternalIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetRegistryV2DevicesDeviceOrExternalIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_registry_v2_devices_device_or_external_id_200_application_json_object: Optional[GetRegistryV2DevicesDeviceOrExternalID200ApplicationJSON] = dataclasses.field(default=None)
    get_registry_v2_devices_device_or_external_id_400_application_json_object: Optional[GetRegistryV2DevicesDeviceOrExternalID400ApplicationJSON] = dataclasses.field(default=None)
    get_registry_v2_devices_device_or_external_id_401_application_json_object: Optional[GetRegistryV2DevicesDeviceOrExternalID401ApplicationJSON] = dataclasses.field(default=None)
    get_registry_v2_devices_device_or_external_id_403_application_json_object: Optional[GetRegistryV2DevicesDeviceOrExternalID403ApplicationJSON] = dataclasses.field(default=None)
    get_registry_v2_devices_device_or_external_id_404_application_json_object: Optional[GetRegistryV2DevicesDeviceOrExternalID404ApplicationJSON] = dataclasses.field(default=None)
    
