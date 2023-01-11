import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class CreateDeviceSwitchRoutingInterfacePathParams:
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    
class CreateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum(str, Enum):
    DISABLED = "disabled"
    ENABLED = "enabled"
    IGMP_SNOOPING_QUERIER = "IGMP snooping querier"


@dataclass_json
@dataclasses.dataclass
class CreateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings:
    r"""CreateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings
    The OSPF routing settings of the interface.
    """
    
    area: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('area') }})
    cost: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cost') }})
    is_passive_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isPassiveEnabled') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateDeviceSwitchRoutingInterfaceRequestBody:
    interface_ip: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interfaceIp') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    vlan_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlanId') }})
    default_gateway: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultGateway') }})
    multicast_routing: Optional[CreateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multicastRouting') }})
    ospf_settings: Optional[CreateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ospfSettings') }})
    subnet: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnet') }})
    

@dataclasses.dataclass
class CreateDeviceSwitchRoutingInterfaceRequest:
    path_params: CreateDeviceSwitchRoutingInterfacePathParams = dataclasses.field()
    request: CreateDeviceSwitchRoutingInterfaceRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateDeviceSwitchRoutingInterfaceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_device_switch_routing_interface_201_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
