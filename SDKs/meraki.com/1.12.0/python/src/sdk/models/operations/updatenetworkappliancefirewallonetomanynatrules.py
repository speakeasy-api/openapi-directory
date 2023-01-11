import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkApplianceFirewallOneToManyNatRulesPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum(str, Enum):
    TCP = "tcp"
    UDP = "udp"


@dataclass_json
@dataclasses.dataclass
class UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules:
    allowed_ips: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedIps') }})
    local_ip: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localIp') }})
    local_port: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localPort') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    protocol: Optional[UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    public_port: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicPort') }})
    
class UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesUplinkEnum(str, Enum):
    INTERNET1 = "internet1"
    INTERNET2 = "internet2"


@dataclass_json
@dataclasses.dataclass
class UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules:
    port_rules: list[UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portRules') }})
    public_ip: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicIp') }})
    uplink: UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesUplinkEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uplink') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBody:
    rules: list[UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    

@dataclasses.dataclass
class UpdateNetworkApplianceFirewallOneToManyNatRulesRequest:
    path_params: UpdateNetworkApplianceFirewallOneToManyNatRulesPathParams = dataclasses.field()
    request: UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkApplianceFirewallOneToManyNatRulesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_appliance_firewall_one_to_many_nat_rules_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
