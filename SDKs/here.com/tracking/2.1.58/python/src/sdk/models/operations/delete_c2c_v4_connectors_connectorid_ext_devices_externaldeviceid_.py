import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteC2cV4ConnectorsConnectorIDExtDevicesExternalDeviceIDPathParams:
    connector_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'connectorId', 'style': 'simple', 'explode': False }})
    external_device_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'externalDeviceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteC2cV4ConnectorsConnectorIDExtDevicesExternalDeviceIDHeaders:
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteC2cV4ConnectorsConnectorIDExtDevicesExternalDeviceIDSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteC2cV4ConnectorsConnectorIDExtDevicesExternalDeviceID400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteC2cV4ConnectorsConnectorIDExtDevicesExternalDeviceID401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteC2cV4ConnectorsConnectorIDExtDevicesExternalDeviceID403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteC2cV4ConnectorsConnectorIDExtDevicesExternalDeviceID404ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class DeleteC2cV4ConnectorsConnectorIDExtDevicesExternalDeviceIDRequest:
    headers: DeleteC2cV4ConnectorsConnectorIDExtDevicesExternalDeviceIDHeaders = dataclasses.field()
    path_params: DeleteC2cV4ConnectorsConnectorIDExtDevicesExternalDeviceIDPathParams = dataclasses.field()
    security: DeleteC2cV4ConnectorsConnectorIDExtDevicesExternalDeviceIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteC2cV4ConnectorsConnectorIDExtDevicesExternalDeviceIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_c2c_v4_connectors_connector_id_ext_devices_external_device_id_400_application_json_object: Optional[DeleteC2cV4ConnectorsConnectorIDExtDevicesExternalDeviceID400ApplicationJSON] = dataclasses.field(default=None)
    delete_c2c_v4_connectors_connector_id_ext_devices_external_device_id_401_application_json_object: Optional[DeleteC2cV4ConnectorsConnectorIDExtDevicesExternalDeviceID401ApplicationJSON] = dataclasses.field(default=None)
    delete_c2c_v4_connectors_connector_id_ext_devices_external_device_id_403_application_json_object: Optional[DeleteC2cV4ConnectorsConnectorIDExtDevicesExternalDeviceID403ApplicationJSON] = dataclasses.field(default=None)
    delete_c2c_v4_connectors_connector_id_ext_devices_external_device_id_404_application_json_object: Optional[DeleteC2cV4ConnectorsConnectorIDExtDevicesExternalDeviceID404ApplicationJSON] = dataclasses.field(default=None)
    
