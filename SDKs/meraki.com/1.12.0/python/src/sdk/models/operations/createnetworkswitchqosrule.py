import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class CreateNetworkSwitchQosRulePathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class CreateNetworkSwitchQosRuleRequestBodyProtocolEnum(str, Enum):
    ANY = "ANY"
    TCP = "TCP"
    UDP = "UDP"


@dataclass_json
@dataclasses.dataclass
class CreateNetworkSwitchQosRuleRequestBody:
    vlan: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlan') }})
    dscp: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dscp') }})
    dst_port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dstPort') }})
    dst_port_range: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dstPortRange') }})
    protocol: Optional[CreateNetworkSwitchQosRuleRequestBodyProtocolEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    src_port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('srcPort') }})
    src_port_range: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('srcPortRange') }})
    

@dataclasses.dataclass
class CreateNetworkSwitchQosRuleRequest:
    path_params: CreateNetworkSwitchQosRulePathParams = dataclasses.field()
    request: CreateNetworkSwitchQosRuleRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateNetworkSwitchQosRuleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_network_switch_qos_rule_201_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
