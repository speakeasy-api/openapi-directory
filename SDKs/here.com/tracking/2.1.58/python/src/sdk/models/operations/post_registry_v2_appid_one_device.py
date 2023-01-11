import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class PostRegistryV2AppIDOneDevicePathParams:
    app_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostRegistryV2AppIDOneDeviceQueryParams:
    autoclaim: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'autoclaim', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostRegistryV2AppIDOneDeviceHeaders:
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostRegistryV2AppIDOneDeviceSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class PostRegistryV2AppIDOneDevice201ApplicationJSON:
    r"""PostRegistryV2AppIDOneDevice201ApplicationJSON
    A JSON object containing the newly created device credentials
    """
    
    device_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceId') }})
    device_secret: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceSecret') }})
    tracking_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingId') }})
    

@dataclass_json
@dataclasses.dataclass
class PostRegistryV2AppIDOneDevice400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostRegistryV2AppIDOneDevice401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostRegistryV2AppIDOneDevice403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostRegistryV2AppIDOneDevice404ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class PostRegistryV2AppIDOneDeviceRequest:
    headers: PostRegistryV2AppIDOneDeviceHeaders = dataclasses.field()
    path_params: PostRegistryV2AppIDOneDevicePathParams = dataclasses.field()
    query_params: PostRegistryV2AppIDOneDeviceQueryParams = dataclasses.field()
    security: PostRegistryV2AppIDOneDeviceSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostRegistryV2AppIDOneDeviceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_registry_v2_app_id_one_device_201_application_json_object: Optional[PostRegistryV2AppIDOneDevice201ApplicationJSON] = dataclasses.field(default=None)
    post_registry_v2_app_id_one_device_400_application_json_object: Optional[PostRegistryV2AppIDOneDevice400ApplicationJSON] = dataclasses.field(default=None)
    post_registry_v2_app_id_one_device_401_application_json_object: Optional[PostRegistryV2AppIDOneDevice401ApplicationJSON] = dataclasses.field(default=None)
    post_registry_v2_app_id_one_device_403_application_json_object: Optional[PostRegistryV2AppIDOneDevice403ApplicationJSON] = dataclasses.field(default=None)
    post_registry_v2_app_id_one_device_404_application_json_object: Optional[PostRegistryV2AppIDOneDevice404ApplicationJSON] = dataclasses.field(default=None)
    
