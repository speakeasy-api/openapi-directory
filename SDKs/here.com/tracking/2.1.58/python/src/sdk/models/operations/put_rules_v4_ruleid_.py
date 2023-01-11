import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class PutRulesV4RuleIDPathParams:
    rule_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ruleId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutRulesV4RuleIDHeaders:
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PutRulesV4RuleIDRequestBodyUtilizationThreshold:
    r"""PutRulesV4RuleIDRequestBodyUtilizationThreshold
    Utilization event is triggered when the asset starts moving
    to indicate the asset is utilized, and also when the asset stops
    moving and has been stationary longer than the threshold duration
    to indicate the asset is unutilized.
    
    """
    
    duration_s: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationS') }})
    
class PutRulesV4RuleIDRequestBodyUtilizationTypeEnum(str, Enum):
    UTILIZATION = "utilization"


@dataclass_json
@dataclasses.dataclass
class PutRulesV4RuleIDRequestBodyUtilization:
    threshold: PutRulesV4RuleIDRequestBodyUtilizationThreshold = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('threshold') }})
    type: PutRulesV4RuleIDRequestBodyUtilizationTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class PutRulesV4RuleIDRequestBodyDetentionThreshold:
    r"""PutRulesV4RuleIDRequestBodyDetentionThreshold
    Detention event is triggered when the asset has been continuously stationary longer
    than the threshold duration.
    
    """
    
    duration_s: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationS') }})
    
class PutRulesV4RuleIDRequestBodyDetentionTypeEnum(str, Enum):
    DETENTION = "detention"


@dataclass_json
@dataclasses.dataclass
class PutRulesV4RuleIDRequestBodyDetention:
    threshold: PutRulesV4RuleIDRequestBodyDetentionThreshold = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('threshold') }})
    type: PutRulesV4RuleIDRequestBodyDetentionTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class PutRulesV4RuleIDRequestBodyDwellingThreshold:
    r"""PutRulesV4RuleIDRequestBodyDwellingThreshold
    Dwelling event is triggered when the asset has been continuously inside a geofence
    longer than the threshold duration.
    
    """
    
    duration_s: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationS') }})
    
class PutRulesV4RuleIDRequestBodyDwellingTypeEnum(str, Enum):
    DWELLING = "dwelling"


@dataclass_json
@dataclasses.dataclass
class PutRulesV4RuleIDRequestBodyDwelling:
    threshold: PutRulesV4RuleIDRequestBodyDwellingThreshold = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('threshold') }})
    type: PutRulesV4RuleIDRequestBodyDwellingTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class PutRulesV4RuleIDRequestBodyStockThreshold:
    max_volume: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxVolume') }})
    min_volume: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minVolume') }})
    
class PutRulesV4RuleIDRequestBodyStockTypeEnum(str, Enum):
    STOCK = "stock"


@dataclass_json
@dataclasses.dataclass
class PutRulesV4RuleIDRequestBodyStock:
    geofence_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('geofenceId') }})
    threshold: PutRulesV4RuleIDRequestBodyStockThreshold = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('threshold') }})
    type: PutRulesV4RuleIDRequestBodyStockTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclasses.dataclass
class PutRulesV4RuleIDSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class PutRulesV4RuleID200ApplicationJSONRuleUtilizationThreshold:
    r"""PutRulesV4RuleID200ApplicationJSONRuleUtilizationThreshold
    Utilization event is triggered when the asset starts moving
    to indicate the asset is utilized, and also when the asset stops
    moving and has been stationary longer than the threshold duration
    to indicate the asset is unutilized.
    
    """
    
    duration_s: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationS') }})
    
class PutRulesV4RuleID200ApplicationJSONRuleUtilizationTypeEnum(str, Enum):
    UTILIZATION = "utilization"


@dataclass_json
@dataclasses.dataclass
class PutRulesV4RuleID200ApplicationJSONRuleUtilization:
    threshold: PutRulesV4RuleID200ApplicationJSONRuleUtilizationThreshold = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('threshold') }})
    type: PutRulesV4RuleID200ApplicationJSONRuleUtilizationTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class PutRulesV4RuleID200ApplicationJSONRuleDetentionThreshold:
    r"""PutRulesV4RuleID200ApplicationJSONRuleDetentionThreshold
    Detention event is triggered when the asset has been continuously stationary longer
    than the threshold duration.
    
    """
    
    duration_s: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationS') }})
    
class PutRulesV4RuleID200ApplicationJSONRuleDetentionTypeEnum(str, Enum):
    DETENTION = "detention"


@dataclass_json
@dataclasses.dataclass
class PutRulesV4RuleID200ApplicationJSONRuleDetention:
    threshold: PutRulesV4RuleID200ApplicationJSONRuleDetentionThreshold = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('threshold') }})
    type: PutRulesV4RuleID200ApplicationJSONRuleDetentionTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class PutRulesV4RuleID200ApplicationJSONRuleDwellingThreshold:
    r"""PutRulesV4RuleID200ApplicationJSONRuleDwellingThreshold
    Dwelling event is triggered when the asset has been continuously inside a geofence
    longer than the threshold duration.
    
    """
    
    duration_s: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationS') }})
    
class PutRulesV4RuleID200ApplicationJSONRuleDwellingTypeEnum(str, Enum):
    DWELLING = "dwelling"


@dataclass_json
@dataclasses.dataclass
class PutRulesV4RuleID200ApplicationJSONRuleDwelling:
    threshold: PutRulesV4RuleID200ApplicationJSONRuleDwellingThreshold = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('threshold') }})
    type: PutRulesV4RuleID200ApplicationJSONRuleDwellingTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class PutRulesV4RuleID200ApplicationJSONRuleStockThreshold:
    max_volume: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxVolume') }})
    min_volume: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minVolume') }})
    
class PutRulesV4RuleID200ApplicationJSONRuleStockTypeEnum(str, Enum):
    STOCK = "stock"


@dataclass_json
@dataclasses.dataclass
class PutRulesV4RuleID200ApplicationJSONRuleStock:
    geofence_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('geofenceId') }})
    threshold: PutRulesV4RuleID200ApplicationJSONRuleStockThreshold = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('threshold') }})
    type: PutRulesV4RuleID200ApplicationJSONRuleStockTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class PutRulesV4RuleID200ApplicationJSON:
    rule: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rule') }})
    rule_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleId') }})
    

@dataclass_json
@dataclasses.dataclass
class PutRulesV4RuleID400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PutRulesV4RuleID401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PutRulesV4RuleID403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PutRulesV4RuleID404ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class PutRulesV4RuleIDRequest:
    headers: PutRulesV4RuleIDHeaders = dataclasses.field()
    path_params: PutRulesV4RuleIDPathParams = dataclasses.field()
    security: PutRulesV4RuleIDSecurity = dataclasses.field()
    request: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutRulesV4RuleIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    put_rules_v4_rule_id_200_application_json_object: Optional[PutRulesV4RuleID200ApplicationJSON] = dataclasses.field(default=None)
    put_rules_v4_rule_id_400_application_json_object: Optional[PutRulesV4RuleID400ApplicationJSON] = dataclasses.field(default=None)
    put_rules_v4_rule_id_401_application_json_object: Optional[PutRulesV4RuleID401ApplicationJSON] = dataclasses.field(default=None)
    put_rules_v4_rule_id_403_application_json_object: Optional[PutRulesV4RuleID403ApplicationJSON] = dataclasses.field(default=None)
    put_rules_v4_rule_id_404_application_json_object: Optional[PutRulesV4RuleID404ApplicationJSON] = dataclasses.field(default=None)
    
