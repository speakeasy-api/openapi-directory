import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class PutAssociationsV3TrackingIDSensorsSensorRuleIDPathParams:
    sensor_rule_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'sensorRuleId', 'style': 'simple', 'explode': False }})
    tracking_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'trackingId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutAssociationsV3TrackingIDSensorsSensorRuleIDQueryParams:
    app_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'appId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PutAssociationsV3TrackingIDSensorsSensorRuleIDHeaders:
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutAssociationsV3TrackingIDSensorsSensorRuleIDSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class PutAssociationsV3TrackingIDSensorsSensorRuleID400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PutAssociationsV3TrackingIDSensorsSensorRuleID401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PutAssociationsV3TrackingIDSensorsSensorRuleID403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PutAssociationsV3TrackingIDSensorsSensorRuleID404ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class PutAssociationsV3TrackingIDSensorsSensorRuleIDRequest:
    headers: PutAssociationsV3TrackingIDSensorsSensorRuleIDHeaders = dataclasses.field()
    path_params: PutAssociationsV3TrackingIDSensorsSensorRuleIDPathParams = dataclasses.field()
    query_params: PutAssociationsV3TrackingIDSensorsSensorRuleIDQueryParams = dataclasses.field()
    security: PutAssociationsV3TrackingIDSensorsSensorRuleIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PutAssociationsV3TrackingIDSensorsSensorRuleIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    put_associations_v3_tracking_id_sensors_sensor_rule_id_400_application_json_object: Optional[PutAssociationsV3TrackingIDSensorsSensorRuleID400ApplicationJSON] = dataclasses.field(default=None)
    put_associations_v3_tracking_id_sensors_sensor_rule_id_401_application_json_object: Optional[PutAssociationsV3TrackingIDSensorsSensorRuleID401ApplicationJSON] = dataclasses.field(default=None)
    put_associations_v3_tracking_id_sensors_sensor_rule_id_403_application_json_object: Optional[PutAssociationsV3TrackingIDSensorsSensorRuleID403ApplicationJSON] = dataclasses.field(default=None)
    put_associations_v3_tracking_id_sensors_sensor_rule_id_404_application_json_object: Optional[PutAssociationsV3TrackingIDSensorsSensorRuleID404ApplicationJSON] = dataclasses.field(default=None)
    
