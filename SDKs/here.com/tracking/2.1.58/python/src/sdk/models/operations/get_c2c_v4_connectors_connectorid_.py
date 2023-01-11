import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetC2cV4ConnectorsConnectorIDPathParams:
    connector_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'connectorId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetC2cV4ConnectorsConnectorIDSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class GetC2cV4ConnectorsConnectorIDConnectorInfo:
    driver_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('driverId') }})
    enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    external_cloud_info: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalCloudInfo') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    total_added_devices: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalAddedDevices') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    last_exec_ts: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastExecTs') }})
    project_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    refresh_interval_s: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refreshIntervalS') }})
    

@dataclass_json
@dataclasses.dataclass
class GetC2cV4ConnectorsConnectorID400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetC2cV4ConnectorsConnectorID401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetC2cV4ConnectorsConnectorID403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetC2cV4ConnectorsConnectorID404ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class GetC2cV4ConnectorsConnectorIDRequest:
    path_params: GetC2cV4ConnectorsConnectorIDPathParams = dataclasses.field()
    security: GetC2cV4ConnectorsConnectorIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetC2cV4ConnectorsConnectorIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    connector_info: Optional[GetC2cV4ConnectorsConnectorIDConnectorInfo] = dataclasses.field(default=None)
    get_c2c_v4_connectors_connector_id_400_application_json_object: Optional[GetC2cV4ConnectorsConnectorID400ApplicationJSON] = dataclasses.field(default=None)
    get_c2c_v4_connectors_connector_id_401_application_json_object: Optional[GetC2cV4ConnectorsConnectorID401ApplicationJSON] = dataclasses.field(default=None)
    get_c2c_v4_connectors_connector_id_403_application_json_object: Optional[GetC2cV4ConnectorsConnectorID403ApplicationJSON] = dataclasses.field(default=None)
    get_c2c_v4_connectors_connector_id_404_application_json_object: Optional[GetC2cV4ConnectorsConnectorID404ApplicationJSON] = dataclasses.field(default=None)
    
