import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class PostRegistryV2AppIDDevicesPathParams:
    app_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostRegistryV2AppIDDevicesQueryParams:
    autoclaim: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'autoclaim', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostRegistryV2AppIDDevicesHeaders:
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PostRegistryV2AppIDDevicesRequestBody1:
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    

@dataclass_json
@dataclasses.dataclass
class PostRegistryV2AppIDDevicesRequestBody2Devices:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class PostRegistryV2AppIDDevicesRequestBody2:
    devices: list[PostRegistryV2AppIDDevicesRequestBody2Devices] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('devices') }})
    

@dataclasses.dataclass
class PostRegistryV2AppIDDevicesSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class PostRegistryV2AppIDDevices202ApplicationJSON:
    job_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobId') }})
    

@dataclass_json
@dataclasses.dataclass
class PostRegistryV2AppIDDevices400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostRegistryV2AppIDDevices401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostRegistryV2AppIDDevices403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostRegistryV2AppIDDevices404ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class PostRegistryV2AppIDDevicesRequest:
    headers: PostRegistryV2AppIDDevicesHeaders = dataclasses.field()
    path_params: PostRegistryV2AppIDDevicesPathParams = dataclasses.field()
    query_params: PostRegistryV2AppIDDevicesQueryParams = dataclasses.field()
    security: PostRegistryV2AppIDDevicesSecurity = dataclasses.field()
    request: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostRegistryV2AppIDDevicesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_registry_v2_app_id_devices_202_application_json_object: Optional[PostRegistryV2AppIDDevices202ApplicationJSON] = dataclasses.field(default=None)
    post_registry_v2_app_id_devices_400_application_json_object: Optional[PostRegistryV2AppIDDevices400ApplicationJSON] = dataclasses.field(default=None)
    post_registry_v2_app_id_devices_401_application_json_object: Optional[PostRegistryV2AppIDDevices401ApplicationJSON] = dataclasses.field(default=None)
    post_registry_v2_app_id_devices_403_application_json_object: Optional[PostRegistryV2AppIDDevices403ApplicationJSON] = dataclasses.field(default=None)
    post_registry_v2_app_id_devices_404_application_json_object: Optional[PostRegistryV2AppIDDevices404ApplicationJSON] = dataclasses.field(default=None)
    
