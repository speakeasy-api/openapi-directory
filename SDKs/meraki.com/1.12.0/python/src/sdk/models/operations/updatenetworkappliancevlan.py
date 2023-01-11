import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkApplianceVlanPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    vlan_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'vlanId', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkApplianceVlanRequestBodyDhcpHandlingEnum(str, Enum):
    RUN_A_DHCP_SERVER = "Run a DHCP server"
    RELAY_DHCP_TO_ANOTHER_SERVER = "Relay DHCP to another server"
    DO_NOT_RESPOND_TO_DHCP_REQUESTS = "Do not respond to DHCP requests"

class UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnum(str, Enum):
    THIRTY_MINUTES = "30 minutes"
    ONE_HOUR = "1 hour"
    FOUR_HOURS = "4 hours"
    TWELVE_HOURS = "12 hours"
    ONE_DAY = "1 day"
    ONE_WEEK = "1 week"

class UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnum(str, Enum):
    TEXT = "text"
    IP = "ip"
    HEX = "hex"
    INTEGER = "integer"


@dataclass_json
@dataclasses.dataclass
class UpdateNetworkApplianceVlanRequestBodyDhcpOptions:
    code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    type: UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkApplianceVlanRequestBodyReservedIPRanges:
    comment: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    end: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    start: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkApplianceVlanRequestBody:
    appliance_ip: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applianceIp') }})
    dhcp_boot_filename: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dhcpBootFilename') }})
    dhcp_boot_next_server: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dhcpBootNextServer') }})
    dhcp_boot_options_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dhcpBootOptionsEnabled') }})
    dhcp_handling: Optional[UpdateNetworkApplianceVlanRequestBodyDhcpHandlingEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dhcpHandling') }})
    dhcp_lease_time: Optional[UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dhcpLeaseTime') }})
    dhcp_options: Optional[list[UpdateNetworkApplianceVlanRequestBodyDhcpOptions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dhcpOptions') }})
    dhcp_relay_server_ips: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dhcpRelayServerIps') }})
    dns_nameservers: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnsNameservers') }})
    fixed_ip_assignments: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixedIpAssignments') }})
    group_policy_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupPolicyId') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    reserved_ip_ranges: Optional[list[UpdateNetworkApplianceVlanRequestBodyReservedIPRanges]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reservedIpRanges') }})
    subnet: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnet') }})
    vpn_nat_subnet: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpnNatSubnet') }})
    

@dataclasses.dataclass
class UpdateNetworkApplianceVlanRequest:
    path_params: UpdateNetworkApplianceVlanPathParams = dataclasses.field()
    request: Optional[UpdateNetworkApplianceVlanRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkApplianceVlanResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_appliance_vlan_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
