import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class PutFirewallsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PutFirewallsIDUpdateFirewallRequest:
    labels: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class PutFirewallsIDFirewallResponseFirewallAppliedToAppliedToResourcesServer:
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
class PutFirewallsIDFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum(str, Enum):
    SERVER = "server"


@dataclass_json
@dataclasses.dataclass
class PutFirewallsIDFirewallResponseFirewallAppliedToAppliedToResources:
    server: Optional[PutFirewallsIDFirewallResponseFirewallAppliedToAppliedToResourcesServer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    type: Optional[PutFirewallsIDFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class PutFirewallsIDFirewallResponseFirewallAppliedToLabelSelector:
    selector: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('selector') }})
    

@dataclass_json
@dataclasses.dataclass
class PutFirewallsIDFirewallResponseFirewallAppliedToServer:
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
class PutFirewallsIDFirewallResponseFirewallAppliedToTypeEnum(str, Enum):
    SERVER = "server"
    LABEL_SELECTOR = "label_selector"


@dataclass_json
@dataclasses.dataclass
class PutFirewallsIDFirewallResponseFirewallAppliedTo:
    type: PutFirewallsIDFirewallResponseFirewallAppliedToTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    applied_to_resources: Optional[list[PutFirewallsIDFirewallResponseFirewallAppliedToAppliedToResources]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applied_to_resources') }})
    label_selector: Optional[PutFirewallsIDFirewallResponseFirewallAppliedToLabelSelector] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label_selector') }})
    server: Optional[PutFirewallsIDFirewallResponseFirewallAppliedToServer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    
class PutFirewallsIDFirewallResponseFirewallRuleDirectionEnum(str, Enum):
    IN = "in"
    OUT = "out"

class PutFirewallsIDFirewallResponseFirewallRuleProtocolEnum(str, Enum):
    TCP = "tcp"
    UDP = "udp"
    ICMP = "icmp"
    ESP = "esp"
    GRE = "gre"


@dataclass_json
@dataclasses.dataclass
class PutFirewallsIDFirewallResponseFirewallRule:
    direction: PutFirewallsIDFirewallResponseFirewallRuleDirectionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('direction') }})
    protocol: PutFirewallsIDFirewallResponseFirewallRuleProtocolEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    destination_ips: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination_ips') }})
    port: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    source_ips: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_ips') }})
    

@dataclass_json
@dataclasses.dataclass
class PutFirewallsIDFirewallResponseFirewall:
    applied_to: list[PutFirewallsIDFirewallResponseFirewallAppliedTo] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('applied_to') }})
    created: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    rules: list[PutFirewallsIDFirewallResponseFirewallRule] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    

@dataclass_json
@dataclasses.dataclass
class PutFirewallsIDFirewallResponse:
    firewall: PutFirewallsIDFirewallResponseFirewall = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('firewall') }})
    

@dataclasses.dataclass
class PutFirewallsIDRequest:
    path_params: PutFirewallsIDPathParams = dataclasses.field()
    request: Optional[PutFirewallsIDUpdateFirewallRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutFirewallsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    firewall_response: Optional[PutFirewallsIDFirewallResponse] = dataclasses.field(default=None)
    
