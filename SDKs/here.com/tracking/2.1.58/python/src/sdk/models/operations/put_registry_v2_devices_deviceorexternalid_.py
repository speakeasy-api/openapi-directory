import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class PutRegistryV2DevicesDeviceOrExternalIDPathParams:
    device_or_external_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'deviceOrExternalId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutRegistryV2DevicesDeviceOrExternalIDQueryParams:
    app_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'appId', 'style': 'form', 'explode': True }})
    project_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'projectId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PutRegistryV2DevicesDeviceOrExternalIDHeaders:
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PutRegistryV2DevicesDeviceOrExternalIDRequestBody:
    owner_app_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownerAppId') }})
    

@dataclasses.dataclass
class PutRegistryV2DevicesDeviceOrExternalIDSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class PutRegistryV2DevicesDeviceOrExternalID200ApplicationJSON:
    tracking_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingId') }})
    

@dataclass_json
@dataclasses.dataclass
class PutRegistryV2DevicesDeviceOrExternalID201ApplicationJSON:
    tracking_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingId') }})
    

@dataclass_json
@dataclasses.dataclass
class PutRegistryV2DevicesDeviceOrExternalID400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PutRegistryV2DevicesDeviceOrExternalID401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PutRegistryV2DevicesDeviceOrExternalID403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PutRegistryV2DevicesDeviceOrExternalID404ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PutRegistryV2DevicesDeviceOrExternalID409ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class PutRegistryV2DevicesDeviceOrExternalIDRequest:
    headers: PutRegistryV2DevicesDeviceOrExternalIDHeaders = dataclasses.field()
    path_params: PutRegistryV2DevicesDeviceOrExternalIDPathParams = dataclasses.field()
    query_params: PutRegistryV2DevicesDeviceOrExternalIDQueryParams = dataclasses.field()
    security: PutRegistryV2DevicesDeviceOrExternalIDSecurity = dataclasses.field()
    request: Optional[PutRegistryV2DevicesDeviceOrExternalIDRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutRegistryV2DevicesDeviceOrExternalIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    put_registry_v2_devices_device_or_external_id_200_application_json_object: Optional[PutRegistryV2DevicesDeviceOrExternalID200ApplicationJSON] = dataclasses.field(default=None)
    put_registry_v2_devices_device_or_external_id_201_application_json_object: Optional[PutRegistryV2DevicesDeviceOrExternalID201ApplicationJSON] = dataclasses.field(default=None)
    put_registry_v2_devices_device_or_external_id_400_application_json_object: Optional[PutRegistryV2DevicesDeviceOrExternalID400ApplicationJSON] = dataclasses.field(default=None)
    put_registry_v2_devices_device_or_external_id_401_application_json_object: Optional[PutRegistryV2DevicesDeviceOrExternalID401ApplicationJSON] = dataclasses.field(default=None)
    put_registry_v2_devices_device_or_external_id_403_application_json_object: Optional[PutRegistryV2DevicesDeviceOrExternalID403ApplicationJSON] = dataclasses.field(default=None)
    put_registry_v2_devices_device_or_external_id_404_application_json_object: Optional[PutRegistryV2DevicesDeviceOrExternalID404ApplicationJSON] = dataclasses.field(default=None)
    put_registry_v2_devices_device_or_external_id_409_application_json_object: Optional[PutRegistryV2DevicesDeviceOrExternalID409ApplicationJSON] = dataclasses.field(default=None)
    
