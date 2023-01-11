import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateOrganizationApplianceVpnVpnFirewallRulesPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    
class UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnum(str, Enum):
    ALLOW = "allow"
    DENY = "deny"

class UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnum(str, Enum):
    TCP = "tcp"
    UDP = "udp"
    ICMP = "icmp"
    ANY = "any"


@dataclass_json
@dataclasses.dataclass
class UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules:
    dest_cidr: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destCidr') }})
    policy: UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    protocol: UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    src_cidr: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('srcCidr') }})
    comment: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    dest_port: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destPort') }})
    src_port: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('srcPort') }})
    syslog_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('syslogEnabled') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBody:
    rules: Optional[list[UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    syslog_default_rule: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('syslogDefaultRule') }})
    

@dataclasses.dataclass
class UpdateOrganizationApplianceVpnVpnFirewallRulesRequest:
    path_params: UpdateOrganizationApplianceVpnVpnFirewallRulesPathParams = dataclasses.field()
    request: Optional[UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateOrganizationApplianceVpnVpnFirewallRulesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_organization_appliance_vpn_vpn_firewall_rules_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
