import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetSensorsV3QueryParams:
    count: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    project_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'projectId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSensorsV3Headers:
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSensorsV3Security:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class GetSensorsV3200ApplicationJSONDataRange:
    begin: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('begin') }})
    end: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    

@dataclass_json
@dataclasses.dataclass
class GetSensorsV3200ApplicationJSONDataThreshold:
    value: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
class GetSensorsV3200ApplicationJSONDataTypeEnum(str, Enum):
    ATTACH = "attach"
    BATTERY = "battery"
    HUMIDITY = "humidity"
    PRESSURE = "pressure"
    TAMPER = "tamper"
    TEMPERATURE = "temperature"
    ACCELERATION = "acceleration"


@dataclass_json
@dataclasses.dataclass
class GetSensorsV3200ApplicationJSONData:
    r"""GetSensorsV3200ApplicationJSONData
    Response body contains a single sensor rule object
    """
    
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: GetSensorsV3200ApplicationJSONDataTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    range: Optional[GetSensorsV3200ApplicationJSONDataRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    threshold: Optional[GetSensorsV3200ApplicationJSONDataThreshold] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('threshold') }})
    

@dataclass_json
@dataclasses.dataclass
class GetSensorsV3200ApplicationJSON:
    r"""GetSensorsV3200ApplicationJSON
    Response body contains an array of sensor rule objects, count indicating the number of returned sensor rules,
    and pageToken if available. If no sensor rules are found, an object with empty data array is returned.
    
    """
    
    count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    data: Optional[list[GetSensorsV3200ApplicationJSONData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageToken') }})
    

@dataclass_json
@dataclasses.dataclass
class GetSensorsV3400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetSensorsV3401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetSensorsV3403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class GetSensorsV3Request:
    headers: GetSensorsV3Headers = dataclasses.field()
    query_params: GetSensorsV3QueryParams = dataclasses.field()
    security: GetSensorsV3Security = dataclasses.field()
    

@dataclasses.dataclass
class GetSensorsV3Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_sensors_v3_200_application_json_object: Optional[GetSensorsV3200ApplicationJSON] = dataclasses.field(default=None)
    get_sensors_v3_400_application_json_object: Optional[GetSensorsV3400ApplicationJSON] = dataclasses.field(default=None)
    get_sensors_v3_401_application_json_object: Optional[GetSensorsV3401ApplicationJSON] = dataclasses.field(default=None)
    get_sensors_v3_403_application_json_object: Optional[GetSensorsV3403ApplicationJSON] = dataclasses.field(default=None)
    
