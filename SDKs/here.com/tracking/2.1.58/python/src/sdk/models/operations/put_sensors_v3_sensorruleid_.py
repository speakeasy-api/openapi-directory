import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class PutSensorsV3SensorRuleIDPathParams:
    sensor_rule_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'sensorRuleId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutSensorsV3SensorRuleIDHeaders:
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PutSensorsV3SensorRuleIDRequestBodyBatteryRange:
    begin: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('begin') }})
    end: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    
class PutSensorsV3SensorRuleIDRequestBodyBatteryTypeEnum(str, Enum):
    BATTERY = "battery"


@dataclass_json
@dataclasses.dataclass
class PutSensorsV3SensorRuleIDRequestBodyBattery:
    range: PutSensorsV3SensorRuleIDRequestBodyBatteryRange = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    type: PutSensorsV3SensorRuleIDRequestBodyBatteryTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class PutSensorsV3SensorRuleIDRequestBodyHumidityRange:
    begin: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('begin') }})
    end: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    
class PutSensorsV3SensorRuleIDRequestBodyHumidityTypeEnum(str, Enum):
    HUMIDITY = "humidity"


@dataclass_json
@dataclasses.dataclass
class PutSensorsV3SensorRuleIDRequestBodyHumidity:
    range: PutSensorsV3SensorRuleIDRequestBodyHumidityRange = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    type: PutSensorsV3SensorRuleIDRequestBodyHumidityTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class PutSensorsV3SensorRuleIDRequestBodyPressureRange:
    begin: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('begin') }})
    end: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    
class PutSensorsV3SensorRuleIDRequestBodyPressureTypeEnum(str, Enum):
    PRESSURE = "pressure"


@dataclass_json
@dataclasses.dataclass
class PutSensorsV3SensorRuleIDRequestBodyPressure:
    range: PutSensorsV3SensorRuleIDRequestBodyPressureRange = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    type: PutSensorsV3SensorRuleIDRequestBodyPressureTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class PutSensorsV3SensorRuleIDRequestBodyTemperatureRange:
    begin: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('begin') }})
    end: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    
class PutSensorsV3SensorRuleIDRequestBodyTemperatureTypeEnum(str, Enum):
    TEMPERATURE = "temperature"


@dataclass_json
@dataclasses.dataclass
class PutSensorsV3SensorRuleIDRequestBodyTemperature:
    range: PutSensorsV3SensorRuleIDRequestBodyTemperatureRange = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    type: PutSensorsV3SensorRuleIDRequestBodyTemperatureTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
class PutSensorsV3SensorRuleIDRequestBodyBooleanTypeEnum(str, Enum):
    ATTACH = "attach"
    TAMPER = "tamper"


@dataclass_json
@dataclasses.dataclass
class PutSensorsV3SensorRuleIDRequestBodyBoolean:
    type: PutSensorsV3SensorRuleIDRequestBodyBooleanTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class PutSensorsV3SensorRuleIDRequestBodyAccelerationThreshold:
    value: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
class PutSensorsV3SensorRuleIDRequestBodyAccelerationTypeEnum(str, Enum):
    ACCELERATION = "acceleration"


@dataclass_json
@dataclasses.dataclass
class PutSensorsV3SensorRuleIDRequestBodyAcceleration:
    threshold: PutSensorsV3SensorRuleIDRequestBodyAccelerationThreshold = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('threshold') }})
    type: PutSensorsV3SensorRuleIDRequestBodyAccelerationTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclasses.dataclass
class PutSensorsV3SensorRuleIDSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class PutSensorsV3SensorRuleID200ApplicationJSONRange:
    begin: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('begin') }})
    end: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    

@dataclass_json
@dataclasses.dataclass
class PutSensorsV3SensorRuleID200ApplicationJSONThreshold:
    value: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
class PutSensorsV3SensorRuleID200ApplicationJSONTypeEnum(str, Enum):
    ATTACH = "attach"
    BATTERY = "battery"
    HUMIDITY = "humidity"
    PRESSURE = "pressure"
    TAMPER = "tamper"
    TEMPERATURE = "temperature"
    ACCELERATION = "acceleration"


@dataclass_json
@dataclasses.dataclass
class PutSensorsV3SensorRuleID200ApplicationJSON:
    r"""PutSensorsV3SensorRuleID200ApplicationJSON
    Response body contains a single sensor rule object
    """
    
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: PutSensorsV3SensorRuleID200ApplicationJSONTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    range: Optional[PutSensorsV3SensorRuleID200ApplicationJSONRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    threshold: Optional[PutSensorsV3SensorRuleID200ApplicationJSONThreshold] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('threshold') }})
    

@dataclass_json
@dataclasses.dataclass
class PutSensorsV3SensorRuleID400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PutSensorsV3SensorRuleID401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PutSensorsV3SensorRuleID403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PutSensorsV3SensorRuleID404ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class PutSensorsV3SensorRuleIDRequest:
    headers: PutSensorsV3SensorRuleIDHeaders = dataclasses.field()
    path_params: PutSensorsV3SensorRuleIDPathParams = dataclasses.field()
    security: PutSensorsV3SensorRuleIDSecurity = dataclasses.field()
    request: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutSensorsV3SensorRuleIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    put_sensors_v3_sensor_rule_id_200_application_json_object: Optional[PutSensorsV3SensorRuleID200ApplicationJSON] = dataclasses.field(default=None)
    put_sensors_v3_sensor_rule_id_400_application_json_object: Optional[PutSensorsV3SensorRuleID400ApplicationJSON] = dataclasses.field(default=None)
    put_sensors_v3_sensor_rule_id_401_application_json_object: Optional[PutSensorsV3SensorRuleID401ApplicationJSON] = dataclasses.field(default=None)
    put_sensors_v3_sensor_rule_id_403_application_json_object: Optional[PutSensorsV3SensorRuleID403ApplicationJSON] = dataclasses.field(default=None)
    put_sensors_v3_sensor_rule_id_404_application_json_object: Optional[PutSensorsV3SensorRuleID404ApplicationJSON] = dataclasses.field(default=None)
    
