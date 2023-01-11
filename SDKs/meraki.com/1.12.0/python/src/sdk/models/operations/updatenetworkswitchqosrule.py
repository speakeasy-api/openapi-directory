import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkSwitchQosRulePathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    qos_rule_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'qosRuleId', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkSwitchQosRuleRequestBodyProtocolEnum(str, Enum):
    ANY = "ANY"
    TCP = "TCP"
    UDP = "UDP"


@dataclass_json
@dataclasses.dataclass
class UpdateNetworkSwitchQosRuleRequestBody:
    dscp: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dscp') }})
    dst_port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dstPort') }})
    dst_port_range: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dstPortRange') }})
    protocol: Optional[UpdateNetworkSwitchQosRuleRequestBodyProtocolEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    src_port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('srcPort') }})
    src_port_range: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('srcPortRange') }})
    vlan: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlan') }})
    

@dataclasses.dataclass
class UpdateNetworkSwitchQosRuleRequest:
    path_params: UpdateNetworkSwitchQosRulePathParams = dataclasses.field()
    request: Optional[UpdateNetworkSwitchQosRuleRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkSwitchQosRuleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_switch_qos_rule_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
