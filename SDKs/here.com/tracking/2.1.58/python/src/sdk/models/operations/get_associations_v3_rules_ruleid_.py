import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetAssociationsV3RulesRuleIDPathParams:
    rule_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ruleId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAssociationsV3RulesRuleIDQueryParams:
    count: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAssociationsV3RulesRuleIDHeaders:
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAssociationsV3RulesRuleIDSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class GetAssociationsV3RulesRuleID200ApplicationJSONData:
    r"""GetAssociationsV3RulesRuleID200ApplicationJSONData
    Response body contains a single device object.
    
    """
    
    tracking_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingId') }})
    app_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appId') }})
    external_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalId') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAssociationsV3RulesRuleID200ApplicationJSON:
    r"""GetAssociationsV3RulesRuleID200ApplicationJSON
    Response body contains an array of device objects, count indicating the number of returned devices,
    and pageToken if available. If no devices are found, an object with empty data array is returned.
    
    """
    
    count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    data: Optional[list[GetAssociationsV3RulesRuleID200ApplicationJSONData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageToken') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAssociationsV3RulesRuleID400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAssociationsV3RulesRuleID401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAssociationsV3RulesRuleID403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAssociationsV3RulesRuleID404ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class GetAssociationsV3RulesRuleIDRequest:
    headers: GetAssociationsV3RulesRuleIDHeaders = dataclasses.field()
    path_params: GetAssociationsV3RulesRuleIDPathParams = dataclasses.field()
    query_params: GetAssociationsV3RulesRuleIDQueryParams = dataclasses.field()
    security: GetAssociationsV3RulesRuleIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAssociationsV3RulesRuleIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_associations_v3_rules_rule_id_200_application_json_object: Optional[GetAssociationsV3RulesRuleID200ApplicationJSON] = dataclasses.field(default=None)
    get_associations_v3_rules_rule_id_400_application_json_object: Optional[GetAssociationsV3RulesRuleID400ApplicationJSON] = dataclasses.field(default=None)
    get_associations_v3_rules_rule_id_401_application_json_object: Optional[GetAssociationsV3RulesRuleID401ApplicationJSON] = dataclasses.field(default=None)
    get_associations_v3_rules_rule_id_403_application_json_object: Optional[GetAssociationsV3RulesRuleID403ApplicationJSON] = dataclasses.field(default=None)
    get_associations_v3_rules_rule_id_404_application_json_object: Optional[GetAssociationsV3RulesRuleID404ApplicationJSON] = dataclasses.field(default=None)
    
