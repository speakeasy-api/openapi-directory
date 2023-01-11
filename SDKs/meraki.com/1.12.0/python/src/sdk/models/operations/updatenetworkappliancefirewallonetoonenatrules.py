import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkApplianceFirewallOneToOneNatRulesPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum(str, Enum):
    TCP = "tcp"
    UDP = "udp"
    ICMP_PING = "icmp-ping"
    ANY = "any"


@dataclass_json
@dataclasses.dataclass
class UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound:
    allowed_ips: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedIps') }})
    destination_ports: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationPorts') }})
    protocol: Optional[UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    
class UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnum(str, Enum):
    INTERNET1 = "internet1"
    INTERNET2 = "internet2"


@dataclass_json
@dataclasses.dataclass
class UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules:
    lan_ip: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lanIp') }})
    allowed_inbound: Optional[list[UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedInbound') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    public_ip: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicIp') }})
    uplink: Optional[UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uplink') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBody:
    rules: list[UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    

@dataclasses.dataclass
class UpdateNetworkApplianceFirewallOneToOneNatRulesRequest:
    path_params: UpdateNetworkApplianceFirewallOneToOneNatRulesPathParams = dataclasses.field()
    request: UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkApplianceFirewallOneToOneNatRulesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_appliance_firewall_one_to_one_nat_rules_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
