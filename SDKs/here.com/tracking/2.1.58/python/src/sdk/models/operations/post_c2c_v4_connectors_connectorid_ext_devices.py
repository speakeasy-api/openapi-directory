import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class PostC2cV4ConnectorsConnectorIDExtDevicesPathParams:
    connector_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'connectorId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostC2cV4ConnectorsConnectorIDExtDevicesHeaders:
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PostC2cV4ConnectorsConnectorIDExtDevicesRequestBody:
    external_device_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalDeviceId') }})
    

@dataclasses.dataclass
class PostC2cV4ConnectorsConnectorIDExtDevicesSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class PostC2cV4ConnectorsConnectorIDExtDevices400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostC2cV4ConnectorsConnectorIDExtDevices401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostC2cV4ConnectorsConnectorIDExtDevices403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostC2cV4ConnectorsConnectorIDExtDevices404ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class PostC2cV4ConnectorsConnectorIDExtDevicesRequest:
    headers: PostC2cV4ConnectorsConnectorIDExtDevicesHeaders = dataclasses.field()
    path_params: PostC2cV4ConnectorsConnectorIDExtDevicesPathParams = dataclasses.field()
    security: PostC2cV4ConnectorsConnectorIDExtDevicesSecurity = dataclasses.field()
    request: Optional[list[PostC2cV4ConnectorsConnectorIDExtDevicesRequestBody]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostC2cV4ConnectorsConnectorIDExtDevicesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_c2c_v4_connectors_connector_id_ext_devices_400_application_json_object: Optional[PostC2cV4ConnectorsConnectorIDExtDevices400ApplicationJSON] = dataclasses.field(default=None)
    post_c2c_v4_connectors_connector_id_ext_devices_401_application_json_object: Optional[PostC2cV4ConnectorsConnectorIDExtDevices401ApplicationJSON] = dataclasses.field(default=None)
    post_c2c_v4_connectors_connector_id_ext_devices_403_application_json_object: Optional[PostC2cV4ConnectorsConnectorIDExtDevices403ApplicationJSON] = dataclasses.field(default=None)
    post_c2c_v4_connectors_connector_id_ext_devices_404_application_json_object: Optional[PostC2cV4ConnectorsConnectorIDExtDevices404ApplicationJSON] = dataclasses.field(default=None)
    
