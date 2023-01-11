import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteRegistryV2DevicesDeviceOrExternalIDPathParams:
    device_or_external_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'deviceOrExternalId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteRegistryV2DevicesDeviceOrExternalIDQueryParams:
    app_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'appId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeleteRegistryV2DevicesDeviceOrExternalIDHeaders:
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteRegistryV2DevicesDeviceOrExternalIDSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteRegistryV2DevicesDeviceOrExternalID400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteRegistryV2DevicesDeviceOrExternalID401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteRegistryV2DevicesDeviceOrExternalID403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteRegistryV2DevicesDeviceOrExternalID404ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class DeleteRegistryV2DevicesDeviceOrExternalIDRequest:
    headers: DeleteRegistryV2DevicesDeviceOrExternalIDHeaders = dataclasses.field()
    path_params: DeleteRegistryV2DevicesDeviceOrExternalIDPathParams = dataclasses.field()
    query_params: DeleteRegistryV2DevicesDeviceOrExternalIDQueryParams = dataclasses.field()
    security: DeleteRegistryV2DevicesDeviceOrExternalIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteRegistryV2DevicesDeviceOrExternalIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_registry_v2_devices_device_or_external_id_400_application_json_object: Optional[DeleteRegistryV2DevicesDeviceOrExternalID400ApplicationJSON] = dataclasses.field(default=None)
    delete_registry_v2_devices_device_or_external_id_401_application_json_object: Optional[DeleteRegistryV2DevicesDeviceOrExternalID401ApplicationJSON] = dataclasses.field(default=None)
    delete_registry_v2_devices_device_or_external_id_403_application_json_object: Optional[DeleteRegistryV2DevicesDeviceOrExternalID403ApplicationJSON] = dataclasses.field(default=None)
    delete_registry_v2_devices_device_or_external_id_404_application_json_object: Optional[DeleteRegistryV2DevicesDeviceOrExternalID404ApplicationJSON] = dataclasses.field(default=None)
    
