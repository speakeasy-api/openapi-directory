import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetFirewallsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetFirewallsIDFirewallResponseFirewallAppliedToAppliedToResourcesServer:
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
class GetFirewallsIDFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum(str, Enum):
    SERVER = "server"


@dataclass_json
@dataclasses.dataclass
class GetFirewallsIDFirewallResponseFirewallAppliedToAppliedToResources:
    server: Optional[GetFirewallsIDFirewallResponseFirewallAppliedToAppliedToResourcesServer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    type: Optional[GetFirewallsIDFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class GetFirewallsIDFirewallResponseFirewallAppliedToLabelSelector:
    selector: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('selector') }})
    

@dataclass_json
@dataclasses.dataclass
class GetFirewallsIDFirewallResponseFirewallAppliedToServer:
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
class GetFirewallsIDFirewallResponseFirewallAppliedToTypeEnum(str, Enum):
    SERVER = "server"
    LABEL_SELECTOR = "label_selector"


@dataclass_json
@dataclasses.dataclass
class GetFirewallsIDFirewallResponseFirewallAppliedTo:
    type: GetFirewallsIDFirewallResponseFirewallAppliedToTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    applied_to_resources: Optional[list[GetFirewallsIDFirewallResponseFirewallAppliedToAppliedToResources]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applied_to_resources') }})
    label_selector: Optional[GetFirewallsIDFirewallResponseFirewallAppliedToLabelSelector] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label_selector') }})
    server: Optional[GetFirewallsIDFirewallResponseFirewallAppliedToServer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    
class GetFirewallsIDFirewallResponseFirewallRuleDirectionEnum(str, Enum):
    IN = "in"
    OUT = "out"

class GetFirewallsIDFirewallResponseFirewallRuleProtocolEnum(str, Enum):
    TCP = "tcp"
    UDP = "udp"
    ICMP = "icmp"
    ESP = "esp"
    GRE = "gre"


@dataclass_json
@dataclasses.dataclass
class GetFirewallsIDFirewallResponseFirewallRule:
    direction: GetFirewallsIDFirewallResponseFirewallRuleDirectionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('direction') }})
    protocol: GetFirewallsIDFirewallResponseFirewallRuleProtocolEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    destination_ips: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination_ips') }})
    port: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    source_ips: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_ips') }})
    

@dataclass_json
@dataclasses.dataclass
class GetFirewallsIDFirewallResponseFirewall:
    applied_to: list[GetFirewallsIDFirewallResponseFirewallAppliedTo] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('applied_to') }})
    created: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    rules: list[GetFirewallsIDFirewallResponseFirewallRule] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    

@dataclass_json
@dataclasses.dataclass
class GetFirewallsIDFirewallResponse:
    firewall: GetFirewallsIDFirewallResponseFirewall = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('firewall') }})
    

@dataclasses.dataclass
class GetFirewallsIDRequest:
    path_params: GetFirewallsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetFirewallsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    firewall_response: Optional[GetFirewallsIDFirewallResponse] = dataclasses.field(default=None)
    
