import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkWirelessSsidFirewallL7FirewallRulesPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesPolicyEnum(str, Enum):
    DENY = "deny"

class UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnum(str, Enum):
    APPLICATION = "application"
    APPLICATION_CATEGORY = "applicationCategory"
    HOST = "host"
    PORT = "port"
    IP_RANGE = "ipRange"


@dataclass_json
@dataclasses.dataclass
class UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules:
    policy: Optional[UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesPolicyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    type: Optional[UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBody:
    rules: Optional[list[UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    

@dataclasses.dataclass
class UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest:
    path_params: UpdateNetworkWirelessSsidFirewallL7FirewallRulesPathParams = dataclasses.field()
    request: Optional[UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkWirelessSsidFirewallL7FirewallRulesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_wireless_ssid_firewall_l7_firewall_rules_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
