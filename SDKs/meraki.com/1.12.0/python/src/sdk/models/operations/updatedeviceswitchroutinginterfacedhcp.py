import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateDeviceSwitchRoutingInterfaceDhcpPathParams:
    interface_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'interfaceId', 'style': 'simple', 'explode': False }})
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    
class UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum(str, Enum):
    THIRTY_MINUTES = "30 minutes"
    ONE_HOUR = "1 hour"
    FOUR_HOURS = "4 hours"
    TWELVE_HOURS = "12 hours"
    ONE_DAY = "1 day"
    ONE_WEEK = "1 week"

class UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpModeEnum(str, Enum):
    DHCP_DISABLED = "dhcpDisabled"
    DHCP_RELAY = "dhcpRelay"
    DHCP_SERVER = "dhcpServer"

class UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum(str, Enum):
    TEXT = "text"
    IP = "ip"
    INTEGER = "integer"
    HEX = "hex"


@dataclass_json
@dataclasses.dataclass
class UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions:
    code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    type: UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
class UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDNSNameserversOptionEnum(str, Enum):
    GOOGLE_PUBLIC_DNS = "googlePublicDns"
    OPEN_DNS = "openDns"
    CUSTOM = "custom"


@dataclass_json
@dataclasses.dataclass
class UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIPAssignments:
    ip: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    mac: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mac') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIPRanges:
    end: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    start: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    comment: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody:
    boot_file_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bootFileName') }})
    boot_next_server: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bootNextServer') }})
    boot_options_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bootOptionsEnabled') }})
    dhcp_lease_time: Optional[UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dhcpLeaseTime') }})
    dhcp_mode: Optional[UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dhcpMode') }})
    dhcp_options: Optional[list[UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dhcpOptions') }})
    dhcp_relay_server_ips: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dhcpRelayServerIps') }})
    dns_custom_nameservers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnsCustomNameservers') }})
    dns_nameservers_option: Optional[UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDNSNameserversOptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnsNameserversOption') }})
    fixed_ip_assignments: Optional[list[UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIPAssignments]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixedIpAssignments') }})
    reserved_ip_ranges: Optional[list[UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIPRanges]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reservedIpRanges') }})
    

@dataclasses.dataclass
class UpdateDeviceSwitchRoutingInterfaceDhcpRequest:
    path_params: UpdateDeviceSwitchRoutingInterfaceDhcpPathParams = dataclasses.field()
    request: Optional[UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateDeviceSwitchRoutingInterfaceDhcpResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_device_switch_routing_interface_dhcp_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
