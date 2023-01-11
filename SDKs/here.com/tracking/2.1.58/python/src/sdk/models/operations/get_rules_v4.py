import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetRulesV4QueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    project_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'projectId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRulesV4Headers:
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRulesV4Security:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class GetRulesV4200ApplicationJSONItemsRuleUtilizationThreshold:
    r"""GetRulesV4200ApplicationJSONItemsRuleUtilizationThreshold
    Utilization event is triggered when the asset starts moving
    to indicate the asset is utilized, and also when the asset stops
    moving and has been stationary longer than the threshold duration
    to indicate the asset is unutilized.
    
    """
    
    duration_s: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationS') }})
    
class GetRulesV4200ApplicationJSONItemsRuleUtilizationTypeEnum(str, Enum):
    UTILIZATION = "utilization"


@dataclass_json
@dataclasses.dataclass
class GetRulesV4200ApplicationJSONItemsRuleUtilization:
    threshold: GetRulesV4200ApplicationJSONItemsRuleUtilizationThreshold = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('threshold') }})
    type: GetRulesV4200ApplicationJSONItemsRuleUtilizationTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRulesV4200ApplicationJSONItemsRuleDetentionThreshold:
    r"""GetRulesV4200ApplicationJSONItemsRuleDetentionThreshold
    Detention event is triggered when the asset has been continuously stationary longer
    than the threshold duration.
    
    """
    
    duration_s: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationS') }})
    
class GetRulesV4200ApplicationJSONItemsRuleDetentionTypeEnum(str, Enum):
    DETENTION = "detention"


@dataclass_json
@dataclasses.dataclass
class GetRulesV4200ApplicationJSONItemsRuleDetention:
    threshold: GetRulesV4200ApplicationJSONItemsRuleDetentionThreshold = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('threshold') }})
    type: GetRulesV4200ApplicationJSONItemsRuleDetentionTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRulesV4200ApplicationJSONItemsRuleDwellingThreshold:
    r"""GetRulesV4200ApplicationJSONItemsRuleDwellingThreshold
    Dwelling event is triggered when the asset has been continuously inside a geofence
    longer than the threshold duration.
    
    """
    
    duration_s: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationS') }})
    
class GetRulesV4200ApplicationJSONItemsRuleDwellingTypeEnum(str, Enum):
    DWELLING = "dwelling"


@dataclass_json
@dataclasses.dataclass
class GetRulesV4200ApplicationJSONItemsRuleDwelling:
    threshold: GetRulesV4200ApplicationJSONItemsRuleDwellingThreshold = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('threshold') }})
    type: GetRulesV4200ApplicationJSONItemsRuleDwellingTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRulesV4200ApplicationJSONItemsRuleStockThreshold:
    max_volume: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxVolume') }})
    min_volume: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minVolume') }})
    
class GetRulesV4200ApplicationJSONItemsRuleStockTypeEnum(str, Enum):
    STOCK = "stock"


@dataclass_json
@dataclasses.dataclass
class GetRulesV4200ApplicationJSONItemsRuleStock:
    geofence_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('geofenceId') }})
    threshold: GetRulesV4200ApplicationJSONItemsRuleStockThreshold = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('threshold') }})
    type: GetRulesV4200ApplicationJSONItemsRuleStockTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRulesV4200ApplicationJSONItems:
    rule: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rule') }})
    rule_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleId') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRulesV4200ApplicationJSON:
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    items: list[GetRulesV4200ApplicationJSONItems] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    limit: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRulesV4400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRulesV4401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRulesV4403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class GetRulesV4Request:
    headers: GetRulesV4Headers = dataclasses.field()
    query_params: GetRulesV4QueryParams = dataclasses.field()
    security: GetRulesV4Security = dataclasses.field()
    

@dataclasses.dataclass
class GetRulesV4Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_rules_v4_200_application_json_object: Optional[GetRulesV4200ApplicationJSON] = dataclasses.field(default=None)
    get_rules_v4_400_application_json_object: Optional[GetRulesV4400ApplicationJSON] = dataclasses.field(default=None)
    get_rules_v4_401_application_json_object: Optional[GetRulesV4401ApplicationJSON] = dataclasses.field(default=None)
    get_rules_v4_403_application_json_object: Optional[GetRulesV4403ApplicationJSON] = dataclasses.field(default=None)
    
