import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkApplianceFirewallCellularFirewallRulesPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesPolicyEnum(str, Enum):
    ALLOW = "allow"
    DENY = "deny"

class UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnum(str, Enum):
    TCP = "tcp"
    UDP = "udp"
    ICMP = "icmp"
    ANY = "any"


@dataclass_json
@dataclasses.dataclass
class UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules:
    dest_cidr: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destCidr') }})
    policy: UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesPolicyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    protocol: UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    src_cidr: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('srcCidr') }})
    comment: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    dest_port: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destPort') }})
    src_port: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('srcPort') }})
    syslog_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('syslogEnabled') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBody:
    rules: Optional[list[UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    

@dataclasses.dataclass
class UpdateNetworkApplianceFirewallCellularFirewallRulesRequest:
    path_params: UpdateNetworkApplianceFirewallCellularFirewallRulesPathParams = dataclasses.field()
    request: Optional[UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkApplianceFirewallCellularFirewallRulesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_appliance_firewall_cellular_firewall_rules_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
