import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkSwitchQosRulesOrderPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkSwitchQosRulesOrderRequestBody:
    rule_ids: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleIds') }})
    

@dataclasses.dataclass
class UpdateNetworkSwitchQosRulesOrderRequest:
    path_params: UpdateNetworkSwitchQosRulesOrderPathParams = dataclasses.field()
    request: UpdateNetworkSwitchQosRulesOrderRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkSwitchQosRulesOrderResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_switch_qos_rules_order_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
