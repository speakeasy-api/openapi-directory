import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkSwitchAlternateManagementInterfacePathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnum(str, Enum):
    RADIUS = "radius"
    SNMP = "snmp"
    SYSLOG = "syslog"


@dataclass_json
@dataclasses.dataclass
class UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches:
    alternate_management_ip: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternateManagementIp') }})
    serial: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serial') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkSwitchAlternateManagementInterfaceRequestBody:
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    protocols: Optional[list[UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocols') }})
    switches: Optional[list[UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('switches') }})
    vlan_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlanId') }})
    

@dataclasses.dataclass
class UpdateNetworkSwitchAlternateManagementInterfaceRequest:
    path_params: UpdateNetworkSwitchAlternateManagementInterfacePathParams = dataclasses.field()
    request: Optional[UpdateNetworkSwitchAlternateManagementInterfaceRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkSwitchAlternateManagementInterfaceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_switch_alternate_management_interface_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
