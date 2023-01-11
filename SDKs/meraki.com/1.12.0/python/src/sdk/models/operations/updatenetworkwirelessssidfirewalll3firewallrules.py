import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkWirelessSsidFirewallL3FirewallRulesPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnum(str, Enum):
    ALLOW = "allow"
    DENY = "deny"

class UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum(str, Enum):
    TCP = "tcp"
    UDP = "udp"
    ICMP = "icmp"
    ANY = "any"


@dataclass_json
@dataclasses.dataclass
class UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules:
    dest_cidr: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destCidr') }})
    policy: UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    protocol: UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    comment: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    dest_port: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destPort') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBody:
    allow_lan_access: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowLanAccess') }})
    rules: Optional[list[UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    

@dataclasses.dataclass
class UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest:
    path_params: UpdateNetworkWirelessSsidFirewallL3FirewallRulesPathParams = dataclasses.field()
    request: Optional[UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkWirelessSsidFirewallL3FirewallRulesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_wireless_ssid_firewall_l3_firewall_rules_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
