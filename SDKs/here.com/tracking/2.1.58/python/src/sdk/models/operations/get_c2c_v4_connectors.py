import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetC2cV4ConnectorsQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    project_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'projectId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetC2cV4ConnectorsHeaders:
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetC2cV4ConnectorsSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class GetC2cV4Connectors200ApplicationJSONConnectorInfo:
    driver_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('driverId') }})
    enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    external_cloud_info: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalCloudInfo') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    total_added_devices: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalAddedDevices') }})
    connector_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorId') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    last_exec_ts: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastExecTs') }})
    project_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    refresh_interval_s: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refreshIntervalS') }})
    

@dataclass_json
@dataclasses.dataclass
class GetC2cV4Connectors200ApplicationJSON:
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    items: list[GetC2cV4Connectors200ApplicationJSONConnectorInfo] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    limit: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    

@dataclass_json
@dataclasses.dataclass
class GetC2cV4Connectors400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetC2cV4Connectors401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetC2cV4Connectors403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class GetC2cV4ConnectorsRequest:
    headers: GetC2cV4ConnectorsHeaders = dataclasses.field()
    query_params: GetC2cV4ConnectorsQueryParams = dataclasses.field()
    security: GetC2cV4ConnectorsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetC2cV4ConnectorsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_c2c_v4_connectors_200_application_json_object: Optional[GetC2cV4Connectors200ApplicationJSON] = dataclasses.field(default=None)
    get_c2c_v4_connectors_400_application_json_object: Optional[GetC2cV4Connectors400ApplicationJSON] = dataclasses.field(default=None)
    get_c2c_v4_connectors_401_application_json_object: Optional[GetC2cV4Connectors401ApplicationJSON] = dataclasses.field(default=None)
    get_c2c_v4_connectors_403_application_json_object: Optional[GetC2cV4Connectors403ApplicationJSON] = dataclasses.field(default=None)
    
