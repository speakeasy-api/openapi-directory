import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetAssociationsV3TrackingIDSensorsPathParams:
    tracking_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'trackingId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAssociationsV3TrackingIDSensorsQueryParams:
    app_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'appId', 'style': 'form', 'explode': True }})
    count: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAssociationsV3TrackingIDSensorsHeaders:
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAssociationsV3TrackingIDSensorsSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class GetAssociationsV3TrackingIDSensors200ApplicationJSONDataRange:
    begin: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('begin') }})
    end: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAssociationsV3TrackingIDSensors200ApplicationJSONDataThreshold:
    value: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
class GetAssociationsV3TrackingIDSensors200ApplicationJSONDataTypeEnum(str, Enum):
    ATTACH = "attach"
    BATTERY = "battery"
    HUMIDITY = "humidity"
    PRESSURE = "pressure"
    TAMPER = "tamper"
    TEMPERATURE = "temperature"
    ACCELERATION = "acceleration"


@dataclass_json
@dataclasses.dataclass
class GetAssociationsV3TrackingIDSensors200ApplicationJSONData:
    r"""GetAssociationsV3TrackingIDSensors200ApplicationJSONData
    Response body contains a single sensor rule object
    """
    
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: GetAssociationsV3TrackingIDSensors200ApplicationJSONDataTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    range: Optional[GetAssociationsV3TrackingIDSensors200ApplicationJSONDataRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    threshold: Optional[GetAssociationsV3TrackingIDSensors200ApplicationJSONDataThreshold] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('threshold') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAssociationsV3TrackingIDSensors200ApplicationJSON:
    r"""GetAssociationsV3TrackingIDSensors200ApplicationJSON
    Response body contains an array of sensor rule objects, count indicating the number of returned sensor rules,
    and pageToken if available. If no sensor rules are found, an object with empty data array is returned.
    
    """
    
    count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    data: Optional[list[GetAssociationsV3TrackingIDSensors200ApplicationJSONData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageToken') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAssociationsV3TrackingIDSensors400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAssociationsV3TrackingIDSensors401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAssociationsV3TrackingIDSensors403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAssociationsV3TrackingIDSensors404ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class GetAssociationsV3TrackingIDSensorsRequest:
    headers: GetAssociationsV3TrackingIDSensorsHeaders = dataclasses.field()
    path_params: GetAssociationsV3TrackingIDSensorsPathParams = dataclasses.field()
    query_params: GetAssociationsV3TrackingIDSensorsQueryParams = dataclasses.field()
    security: GetAssociationsV3TrackingIDSensorsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAssociationsV3TrackingIDSensorsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_associations_v3_tracking_id_sensors_200_application_json_object: Optional[GetAssociationsV3TrackingIDSensors200ApplicationJSON] = dataclasses.field(default=None)
    get_associations_v3_tracking_id_sensors_400_application_json_object: Optional[GetAssociationsV3TrackingIDSensors400ApplicationJSON] = dataclasses.field(default=None)
    get_associations_v3_tracking_id_sensors_401_application_json_object: Optional[GetAssociationsV3TrackingIDSensors401ApplicationJSON] = dataclasses.field(default=None)
    get_associations_v3_tracking_id_sensors_403_application_json_object: Optional[GetAssociationsV3TrackingIDSensors403ApplicationJSON] = dataclasses.field(default=None)
    get_associations_v3_tracking_id_sensors_404_application_json_object: Optional[GetAssociationsV3TrackingIDSensors404ApplicationJSON] = dataclasses.field(default=None)
    
