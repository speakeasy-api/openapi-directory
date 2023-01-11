import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetRulesV4RuleIDPathParams:
    rule_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ruleId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRulesV4RuleIDHeaders:
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRulesV4RuleIDSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class GetRulesV4RuleID200ApplicationJSONRuleUtilizationThreshold:
    r"""GetRulesV4RuleID200ApplicationJSONRuleUtilizationThreshold
    Utilization event is triggered when the asset starts moving
    to indicate the asset is utilized, and also when the asset stops
    moving and has been stationary longer than the threshold duration
    to indicate the asset is unutilized.
    
    """
    
    duration_s: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationS') }})
    
class GetRulesV4RuleID200ApplicationJSONRuleUtilizationTypeEnum(str, Enum):
    UTILIZATION = "utilization"


@dataclass_json
@dataclasses.dataclass
class GetRulesV4RuleID200ApplicationJSONRuleUtilization:
    threshold: GetRulesV4RuleID200ApplicationJSONRuleUtilizationThreshold = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('threshold') }})
    type: GetRulesV4RuleID200ApplicationJSONRuleUtilizationTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRulesV4RuleID200ApplicationJSONRuleDetentionThreshold:
    r"""GetRulesV4RuleID200ApplicationJSONRuleDetentionThreshold
    Detention event is triggered when the asset has been continuously stationary longer
    than the threshold duration.
    
    """
    
    duration_s: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationS') }})
    
class GetRulesV4RuleID200ApplicationJSONRuleDetentionTypeEnum(str, Enum):
    DETENTION = "detention"


@dataclass_json
@dataclasses.dataclass
class GetRulesV4RuleID200ApplicationJSONRuleDetention:
    threshold: GetRulesV4RuleID200ApplicationJSONRuleDetentionThreshold = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('threshold') }})
    type: GetRulesV4RuleID200ApplicationJSONRuleDetentionTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRulesV4RuleID200ApplicationJSONRuleDwellingThreshold:
    r"""GetRulesV4RuleID200ApplicationJSONRuleDwellingThreshold
    Dwelling event is triggered when the asset has been continuously inside a geofence
    longer than the threshold duration.
    
    """
    
    duration_s: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationS') }})
    
class GetRulesV4RuleID200ApplicationJSONRuleDwellingTypeEnum(str, Enum):
    DWELLING = "dwelling"


@dataclass_json
@dataclasses.dataclass
class GetRulesV4RuleID200ApplicationJSONRuleDwelling:
    threshold: GetRulesV4RuleID200ApplicationJSONRuleDwellingThreshold = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('threshold') }})
    type: GetRulesV4RuleID200ApplicationJSONRuleDwellingTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRulesV4RuleID200ApplicationJSONRuleStockThreshold:
    max_volume: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxVolume') }})
    min_volume: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minVolume') }})
    
class GetRulesV4RuleID200ApplicationJSONRuleStockTypeEnum(str, Enum):
    STOCK = "stock"


@dataclass_json
@dataclasses.dataclass
class GetRulesV4RuleID200ApplicationJSONRuleStock:
    geofence_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('geofenceId') }})
    threshold: GetRulesV4RuleID200ApplicationJSONRuleStockThreshold = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('threshold') }})
    type: GetRulesV4RuleID200ApplicationJSONRuleStockTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRulesV4RuleID200ApplicationJSON:
    rule: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rule') }})
    rule_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleId') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRulesV4RuleID400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRulesV4RuleID401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRulesV4RuleID403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRulesV4RuleID404ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class GetRulesV4RuleIDRequest:
    headers: GetRulesV4RuleIDHeaders = dataclasses.field()
    path_params: GetRulesV4RuleIDPathParams = dataclasses.field()
    security: GetRulesV4RuleIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetRulesV4RuleIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_rules_v4_rule_id_200_application_json_object: Optional[GetRulesV4RuleID200ApplicationJSON] = dataclasses.field(default=None)
    get_rules_v4_rule_id_400_application_json_object: Optional[GetRulesV4RuleID400ApplicationJSON] = dataclasses.field(default=None)
    get_rules_v4_rule_id_401_application_json_object: Optional[GetRulesV4RuleID401ApplicationJSON] = dataclasses.field(default=None)
    get_rules_v4_rule_id_403_application_json_object: Optional[GetRulesV4RuleID403ApplicationJSON] = dataclasses.field(default=None)
    get_rules_v4_rule_id_404_application_json_object: Optional[GetRulesV4RuleID404ApplicationJSON] = dataclasses.field(default=None)
    
