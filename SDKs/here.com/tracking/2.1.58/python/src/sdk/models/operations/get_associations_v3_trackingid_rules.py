import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetAssociationsV3TrackingIDRulesPathParams:
    tracking_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'trackingId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAssociationsV3TrackingIDRulesQueryParams:
    app_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'appId', 'style': 'form', 'explode': True }})
    count: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAssociationsV3TrackingIDRulesHeaders:
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAssociationsV3TrackingIDRulesSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class GetAssociationsV3TrackingIDRules200ApplicationJSONDataRuleDetentionThreshold:
    r"""GetAssociationsV3TrackingIDRules200ApplicationJSONDataRuleDetentionThreshold
    Detention event is triggered when the asset has been continuously stationary longer
    than the threshold duration.
    
    """
    
    duration_s: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationS') }})
    
class GetAssociationsV3TrackingIDRules200ApplicationJSONDataRuleDetentionTypeEnum(str, Enum):
    DETENTION = "detention"


@dataclass_json
@dataclasses.dataclass
class GetAssociationsV3TrackingIDRules200ApplicationJSONDataRuleDetention:
    threshold: GetAssociationsV3TrackingIDRules200ApplicationJSONDataRuleDetentionThreshold = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('threshold') }})
    type: GetAssociationsV3TrackingIDRules200ApplicationJSONDataRuleDetentionTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAssociationsV3TrackingIDRules200ApplicationJSONDataRuleDwellingThreshold:
    r"""GetAssociationsV3TrackingIDRules200ApplicationJSONDataRuleDwellingThreshold
    Dwelling event is triggered when the asset has been continuously inside a geofence
    longer than the threshold duration.
    
    """
    
    duration_s: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationS') }})
    
class GetAssociationsV3TrackingIDRules200ApplicationJSONDataRuleDwellingTypeEnum(str, Enum):
    DWELLING = "dwelling"


@dataclass_json
@dataclasses.dataclass
class GetAssociationsV3TrackingIDRules200ApplicationJSONDataRuleDwelling:
    threshold: GetAssociationsV3TrackingIDRules200ApplicationJSONDataRuleDwellingThreshold = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('threshold') }})
    type: GetAssociationsV3TrackingIDRules200ApplicationJSONDataRuleDwellingTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAssociationsV3TrackingIDRules200ApplicationJSONDataRuleUtilizationThreshold:
    r"""GetAssociationsV3TrackingIDRules200ApplicationJSONDataRuleUtilizationThreshold
    Utilization event is triggered when the asset starts moving
    to indicate the asset is utilized, and also when the asset stops
    moving and has been stationary longer than the threshold duration
    to indicate the asset is unutilized.
    
    """
    
    duration_s: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationS') }})
    
class GetAssociationsV3TrackingIDRules200ApplicationJSONDataRuleUtilizationTypeEnum(str, Enum):
    UTILIZATION = "utilization"


@dataclass_json
@dataclasses.dataclass
class GetAssociationsV3TrackingIDRules200ApplicationJSONDataRuleUtilization:
    threshold: GetAssociationsV3TrackingIDRules200ApplicationJSONDataRuleUtilizationThreshold = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('threshold') }})
    type: GetAssociationsV3TrackingIDRules200ApplicationJSONDataRuleUtilizationTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAssociationsV3TrackingIDRules200ApplicationJSONData:
    rule: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rule') }})
    rule_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleId') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAssociationsV3TrackingIDRules200ApplicationJSON:
    r"""GetAssociationsV3TrackingIDRules200ApplicationJSON
    Response body contains an array of rule objects, count indicating the number of returned rules,
    and pageToken if available. If no rules are found, an object with empty data array is returned.
    
    """
    
    count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    data: Optional[list[GetAssociationsV3TrackingIDRules200ApplicationJSONData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageToken') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAssociationsV3TrackingIDRules400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAssociationsV3TrackingIDRules401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAssociationsV3TrackingIDRules403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAssociationsV3TrackingIDRules404ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class GetAssociationsV3TrackingIDRulesRequest:
    headers: GetAssociationsV3TrackingIDRulesHeaders = dataclasses.field()
    path_params: GetAssociationsV3TrackingIDRulesPathParams = dataclasses.field()
    query_params: GetAssociationsV3TrackingIDRulesQueryParams = dataclasses.field()
    security: GetAssociationsV3TrackingIDRulesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAssociationsV3TrackingIDRulesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_associations_v3_tracking_id_rules_200_application_json_object: Optional[GetAssociationsV3TrackingIDRules200ApplicationJSON] = dataclasses.field(default=None)
    get_associations_v3_tracking_id_rules_400_application_json_object: Optional[GetAssociationsV3TrackingIDRules400ApplicationJSON] = dataclasses.field(default=None)
    get_associations_v3_tracking_id_rules_401_application_json_object: Optional[GetAssociationsV3TrackingIDRules401ApplicationJSON] = dataclasses.field(default=None)
    get_associations_v3_tracking_id_rules_403_application_json_object: Optional[GetAssociationsV3TrackingIDRules403ApplicationJSON] = dataclasses.field(default=None)
    get_associations_v3_tracking_id_rules_404_application_json_object: Optional[GetAssociationsV3TrackingIDRules404ApplicationJSON] = dataclasses.field(default=None)
    
