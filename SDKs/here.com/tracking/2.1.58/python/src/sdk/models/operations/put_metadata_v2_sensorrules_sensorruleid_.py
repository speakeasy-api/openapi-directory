import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class PutMetadataV2SensorRulesSensorRuleIDPathParams:
    sensor_rule_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'sensorRuleId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutMetadataV2SensorRulesSensorRuleIDHeaders:
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutMetadataV2SensorRulesSensorRuleIDSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class PutMetadataV2SensorRulesSensorRuleID200ApplicationJSON:
    data: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    id: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class PutMetadataV2SensorRulesSensorRuleID400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PutMetadataV2SensorRulesSensorRuleID401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PutMetadataV2SensorRulesSensorRuleID403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PutMetadataV2SensorRulesSensorRuleID404ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class PutMetadataV2SensorRulesSensorRuleIDRequest:
    headers: PutMetadataV2SensorRulesSensorRuleIDHeaders = dataclasses.field()
    path_params: PutMetadataV2SensorRulesSensorRuleIDPathParams = dataclasses.field()
    request: dict[str, Any] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PutMetadataV2SensorRulesSensorRuleIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PutMetadataV2SensorRulesSensorRuleIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    put_metadata_v2_sensor_rules_sensor_rule_id_200_application_json_object: Optional[PutMetadataV2SensorRulesSensorRuleID200ApplicationJSON] = dataclasses.field(default=None)
    put_metadata_v2_sensor_rules_sensor_rule_id_400_application_json_object: Optional[PutMetadataV2SensorRulesSensorRuleID400ApplicationJSON] = dataclasses.field(default=None)
    put_metadata_v2_sensor_rules_sensor_rule_id_401_application_json_object: Optional[PutMetadataV2SensorRulesSensorRuleID401ApplicationJSON] = dataclasses.field(default=None)
    put_metadata_v2_sensor_rules_sensor_rule_id_403_application_json_object: Optional[PutMetadataV2SensorRulesSensorRuleID403ApplicationJSON] = dataclasses.field(default=None)
    put_metadata_v2_sensor_rules_sensor_rule_id_404_application_json_object: Optional[PutMetadataV2SensorRulesSensorRuleID404ApplicationJSON] = dataclasses.field(default=None)
    
