import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkApplianceFirewallPortForwardingRulesPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnum(str, Enum):
    TCP = "tcp"
    UDP = "udp"

class UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesUplinkEnum(str, Enum):
    INTERNET1 = "internet1"
    INTERNET2 = "internet2"
    BOTH = "both"


@dataclass_json
@dataclasses.dataclass
class UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules:
    allowed_ips: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedIps') }})
    lan_ip: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lanIp') }})
    local_port: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('localPort') }})
    protocol: UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    public_port: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicPort') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    uplink: Optional[UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesUplinkEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uplink') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkApplianceFirewallPortForwardingRulesRequestBody:
    rules: list[UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    

@dataclasses.dataclass
class UpdateNetworkApplianceFirewallPortForwardingRulesRequest:
    path_params: UpdateNetworkApplianceFirewallPortForwardingRulesPathParams = dataclasses.field()
    request: UpdateNetworkApplianceFirewallPortForwardingRulesRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkApplianceFirewallPortForwardingRulesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_appliance_firewall_port_forwarding_rules_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
