import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetC2cV4ConnectorsConnectorIDExtDevicesPathParams:
    connector_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'connectorId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetC2cV4ConnectorsConnectorIDExtDevicesQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetC2cV4ConnectorsConnectorIDExtDevicesHeaders:
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetC2cV4ConnectorsConnectorIDExtDevicesSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
class GetC2cV4ConnectorsConnectorIDExtDevices200ApplicationJSONItemsProvisioningEnum(str, Enum):
    PROVISIONING = "provisioning"
    PROVISIONED = "provisioned"
    FAILED = "failed"


@dataclass_json
@dataclasses.dataclass
class GetC2cV4ConnectorsConnectorIDExtDevices200ApplicationJSONItems:
    external_device_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalDeviceId') }})
    provisioning: GetC2cV4ConnectorsConnectorIDExtDevices200ApplicationJSONItemsProvisioningEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('provisioning') }})
    info: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('info') }})
    

@dataclass_json
@dataclasses.dataclass
class GetC2cV4ConnectorsConnectorIDExtDevices200ApplicationJSON:
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    items: list[GetC2cV4ConnectorsConnectorIDExtDevices200ApplicationJSONItems] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    limit: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    

@dataclass_json
@dataclasses.dataclass
class GetC2cV4ConnectorsConnectorIDExtDevices400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetC2cV4ConnectorsConnectorIDExtDevices401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetC2cV4ConnectorsConnectorIDExtDevices403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetC2cV4ConnectorsConnectorIDExtDevices404ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class GetC2cV4ConnectorsConnectorIDExtDevicesRequest:
    headers: GetC2cV4ConnectorsConnectorIDExtDevicesHeaders = dataclasses.field()
    path_params: GetC2cV4ConnectorsConnectorIDExtDevicesPathParams = dataclasses.field()
    query_params: GetC2cV4ConnectorsConnectorIDExtDevicesQueryParams = dataclasses.field()
    security: GetC2cV4ConnectorsConnectorIDExtDevicesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetC2cV4ConnectorsConnectorIDExtDevicesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_c2c_v4_connectors_connector_id_ext_devices_200_application_json_object: Optional[GetC2cV4ConnectorsConnectorIDExtDevices200ApplicationJSON] = dataclasses.field(default=None)
    get_c2c_v4_connectors_connector_id_ext_devices_400_application_json_object: Optional[GetC2cV4ConnectorsConnectorIDExtDevices400ApplicationJSON] = dataclasses.field(default=None)
    get_c2c_v4_connectors_connector_id_ext_devices_401_application_json_object: Optional[GetC2cV4ConnectorsConnectorIDExtDevices401ApplicationJSON] = dataclasses.field(default=None)
    get_c2c_v4_connectors_connector_id_ext_devices_403_application_json_object: Optional[GetC2cV4ConnectorsConnectorIDExtDevices403ApplicationJSON] = dataclasses.field(default=None)
    get_c2c_v4_connectors_connector_id_ext_devices_404_application_json_object: Optional[GetC2cV4ConnectorsConnectorIDExtDevices404ApplicationJSON] = dataclasses.field(default=None)
    
