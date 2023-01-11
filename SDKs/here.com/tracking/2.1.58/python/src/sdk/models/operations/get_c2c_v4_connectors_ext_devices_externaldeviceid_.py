import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetC2cV4ConnectorsExtDevicesExternalDeviceIDPathParams:
    external_device_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'externalDeviceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetC2cV4ConnectorsExtDevicesExternalDeviceIDQueryParams:
    project_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'projectId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetC2cV4ConnectorsExtDevicesExternalDeviceIDHeaders:
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetC2cV4ConnectorsExtDevicesExternalDeviceIDSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class GetC2cV4ConnectorsExtDevicesExternalDeviceID200ApplicationJSONItems:
    connector_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorId') }})
    

@dataclass_json
@dataclasses.dataclass
class GetC2cV4ConnectorsExtDevicesExternalDeviceID200ApplicationJSON:
    items: list[GetC2cV4ConnectorsExtDevicesExternalDeviceID200ApplicationJSONItems] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    

@dataclass_json
@dataclasses.dataclass
class GetC2cV4ConnectorsExtDevicesExternalDeviceID400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetC2cV4ConnectorsExtDevicesExternalDeviceID401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetC2cV4ConnectorsExtDevicesExternalDeviceID403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetC2cV4ConnectorsExtDevicesExternalDeviceID404ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class GetC2cV4ConnectorsExtDevicesExternalDeviceIDRequest:
    headers: GetC2cV4ConnectorsExtDevicesExternalDeviceIDHeaders = dataclasses.field()
    path_params: GetC2cV4ConnectorsExtDevicesExternalDeviceIDPathParams = dataclasses.field()
    query_params: GetC2cV4ConnectorsExtDevicesExternalDeviceIDQueryParams = dataclasses.field()
    security: GetC2cV4ConnectorsExtDevicesExternalDeviceIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetC2cV4ConnectorsExtDevicesExternalDeviceIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_c2c_v4_connectors_ext_devices_external_device_id_200_application_json_object: Optional[GetC2cV4ConnectorsExtDevicesExternalDeviceID200ApplicationJSON] = dataclasses.field(default=None)
    get_c2c_v4_connectors_ext_devices_external_device_id_400_application_json_object: Optional[GetC2cV4ConnectorsExtDevicesExternalDeviceID400ApplicationJSON] = dataclasses.field(default=None)
    get_c2c_v4_connectors_ext_devices_external_device_id_401_application_json_object: Optional[GetC2cV4ConnectorsExtDevicesExternalDeviceID401ApplicationJSON] = dataclasses.field(default=None)
    get_c2c_v4_connectors_ext_devices_external_device_id_403_application_json_object: Optional[GetC2cV4ConnectorsExtDevicesExternalDeviceID403ApplicationJSON] = dataclasses.field(default=None)
    get_c2c_v4_connectors_ext_devices_external_device_id_404_application_json_object: Optional[GetC2cV4ConnectorsExtDevicesExternalDeviceID404ApplicationJSON] = dataclasses.field(default=None)
    
