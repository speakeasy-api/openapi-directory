import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class PostSensorsV3QueryParams:
    project_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'projectId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostSensorsV3Headers:
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PostSensorsV3RequestBodyBatteryRange:
    begin: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('begin') }})
    end: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    
class PostSensorsV3RequestBodyBatteryTypeEnum(str, Enum):
    BATTERY = "battery"


@dataclass_json
@dataclasses.dataclass
class PostSensorsV3RequestBodyBattery:
    range: PostSensorsV3RequestBodyBatteryRange = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    type: PostSensorsV3RequestBodyBatteryTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class PostSensorsV3RequestBodyHumidityRange:
    begin: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('begin') }})
    end: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    
class PostSensorsV3RequestBodyHumidityTypeEnum(str, Enum):
    HUMIDITY = "humidity"


@dataclass_json
@dataclasses.dataclass
class PostSensorsV3RequestBodyHumidity:
    range: PostSensorsV3RequestBodyHumidityRange = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    type: PostSensorsV3RequestBodyHumidityTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class PostSensorsV3RequestBodyPressureRange:
    begin: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('begin') }})
    end: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    
class PostSensorsV3RequestBodyPressureTypeEnum(str, Enum):
    PRESSURE = "pressure"


@dataclass_json
@dataclasses.dataclass
class PostSensorsV3RequestBodyPressure:
    range: PostSensorsV3RequestBodyPressureRange = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    type: PostSensorsV3RequestBodyPressureTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class PostSensorsV3RequestBodyTemperatureRange:
    begin: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('begin') }})
    end: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    
class PostSensorsV3RequestBodyTemperatureTypeEnum(str, Enum):
    TEMPERATURE = "temperature"


@dataclass_json
@dataclasses.dataclass
class PostSensorsV3RequestBodyTemperature:
    range: PostSensorsV3RequestBodyTemperatureRange = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    type: PostSensorsV3RequestBodyTemperatureTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
class PostSensorsV3RequestBodyBooleanTypeEnum(str, Enum):
    ATTACH = "attach"
    TAMPER = "tamper"


@dataclass_json
@dataclasses.dataclass
class PostSensorsV3RequestBodyBoolean:
    type: PostSensorsV3RequestBodyBooleanTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class PostSensorsV3RequestBodyAccelerationThreshold:
    value: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
class PostSensorsV3RequestBodyAccelerationTypeEnum(str, Enum):
    ACCELERATION = "acceleration"


@dataclass_json
@dataclasses.dataclass
class PostSensorsV3RequestBodyAcceleration:
    threshold: PostSensorsV3RequestBodyAccelerationThreshold = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('threshold') }})
    type: PostSensorsV3RequestBodyAccelerationTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclasses.dataclass
class PostSensorsV3Security:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class PostSensorsV3201ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostSensorsV3400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostSensorsV3401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostSensorsV3403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class PostSensorsV3Request:
    headers: PostSensorsV3Headers = dataclasses.field()
    query_params: PostSensorsV3QueryParams = dataclasses.field()
    security: PostSensorsV3Security = dataclasses.field()
    request: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostSensorsV3Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_sensors_v3_201_application_json_object: Optional[PostSensorsV3201ApplicationJSON] = dataclasses.field(default=None)
    post_sensors_v3_400_application_json_object: Optional[PostSensorsV3400ApplicationJSON] = dataclasses.field(default=None)
    post_sensors_v3_401_application_json_object: Optional[PostSensorsV3401ApplicationJSON] = dataclasses.field(default=None)
    post_sensors_v3_403_application_json_object: Optional[PostSensorsV3403ApplicationJSON] = dataclasses.field(default=None)
    
