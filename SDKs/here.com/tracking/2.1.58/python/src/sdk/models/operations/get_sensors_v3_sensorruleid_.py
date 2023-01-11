import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetSensorsV3SensorRuleIDPathParams:
    sensor_rule_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'sensorRuleId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSensorsV3SensorRuleIDHeaders:
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSensorsV3SensorRuleIDSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class GetSensorsV3SensorRuleID200ApplicationJSONRange:
    begin: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('begin') }})
    end: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    

@dataclass_json
@dataclasses.dataclass
class GetSensorsV3SensorRuleID200ApplicationJSONThreshold:
    value: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
class GetSensorsV3SensorRuleID200ApplicationJSONTypeEnum(str, Enum):
    ATTACH = "attach"
    BATTERY = "battery"
    HUMIDITY = "humidity"
    PRESSURE = "pressure"
    TAMPER = "tamper"
    TEMPERATURE = "temperature"
    ACCELERATION = "acceleration"


@dataclass_json
@dataclasses.dataclass
class GetSensorsV3SensorRuleID200ApplicationJSON:
    r"""GetSensorsV3SensorRuleID200ApplicationJSON
    Response body contains a single sensor rule object
    """
    
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: GetSensorsV3SensorRuleID200ApplicationJSONTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    range: Optional[GetSensorsV3SensorRuleID200ApplicationJSONRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    threshold: Optional[GetSensorsV3SensorRuleID200ApplicationJSONThreshold] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('threshold') }})
    

@dataclass_json
@dataclasses.dataclass
class GetSensorsV3SensorRuleID400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetSensorsV3SensorRuleID401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetSensorsV3SensorRuleID403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetSensorsV3SensorRuleID404ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class GetSensorsV3SensorRuleIDRequest:
    headers: GetSensorsV3SensorRuleIDHeaders = dataclasses.field()
    path_params: GetSensorsV3SensorRuleIDPathParams = dataclasses.field()
    security: GetSensorsV3SensorRuleIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetSensorsV3SensorRuleIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_sensors_v3_sensor_rule_id_200_application_json_object: Optional[GetSensorsV3SensorRuleID200ApplicationJSON] = dataclasses.field(default=None)
    get_sensors_v3_sensor_rule_id_400_application_json_object: Optional[GetSensorsV3SensorRuleID400ApplicationJSON] = dataclasses.field(default=None)
    get_sensors_v3_sensor_rule_id_401_application_json_object: Optional[GetSensorsV3SensorRuleID401ApplicationJSON] = dataclasses.field(default=None)
    get_sensors_v3_sensor_rule_id_403_application_json_object: Optional[GetSensorsV3SensorRuleID403ApplicationJSON] = dataclasses.field(default=None)
    get_sensors_v3_sensor_rule_id_404_application_json_object: Optional[GetSensorsV3SensorRuleID404ApplicationJSON] = dataclasses.field(default=None)
    
