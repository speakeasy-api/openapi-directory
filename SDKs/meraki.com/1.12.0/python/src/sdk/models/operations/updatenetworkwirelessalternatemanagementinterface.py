import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkWirelessAlternateManagementInterfacePathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints:
    alternate_management_ip: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternateManagementIp') }})
    serial: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serial') }})
    dns1: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dns1') }})
    dns2: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dns2') }})
    gateway: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gateway') }})
    subnet_mask: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnetMask') }})
    
class UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnum(str, Enum):
    RADIUS = "radius"
    SNMP = "snmp"
    SYSLOG = "syslog"
    LDAP = "ldap"


@dataclass_json
@dataclasses.dataclass
class UpdateNetworkWirelessAlternateManagementInterfaceRequestBody:
    access_points: Optional[list[UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessPoints') }})
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    protocols: Optional[list[UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocols') }})
    vlan_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlanId') }})
    

@dataclasses.dataclass
class UpdateNetworkWirelessAlternateManagementInterfaceRequest:
    path_params: UpdateNetworkWirelessAlternateManagementInterfacePathParams = dataclasses.field()
    request: Optional[UpdateNetworkWirelessAlternateManagementInterfaceRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkWirelessAlternateManagementInterfaceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_wireless_alternate_management_interface_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
