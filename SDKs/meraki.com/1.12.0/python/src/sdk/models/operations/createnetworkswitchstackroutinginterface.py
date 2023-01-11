import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class CreateNetworkSwitchStackRoutingInterfacePathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    switch_stack_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'switchStackId', 'style': 'simple', 'explode': False }})
    
class CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum(str, Enum):
    DISABLED = "disabled"
    ENABLED = "enabled"
    IGMP_SNOOPING_QUERIER = "IGMP snooping querier"


@dataclass_json
@dataclasses.dataclass
class CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings:
    r"""CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings
    The OSPF routing settings of the interface.
    """
    
    area: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('area') }})
    cost: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cost') }})
    is_passive_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isPassiveEnabled') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkSwitchStackRoutingInterfaceRequestBody:
    interface_ip: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interfaceIp') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    subnet: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnet') }})
    vlan_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlanId') }})
    default_gateway: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultGateway') }})
    multicast_routing: Optional[CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multicastRouting') }})
    ospf_settings: Optional[CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ospfSettings') }})
    

@dataclasses.dataclass
class CreateNetworkSwitchStackRoutingInterfaceRequest:
    path_params: CreateNetworkSwitchStackRoutingInterfacePathParams = dataclasses.field()
    request: CreateNetworkSwitchStackRoutingInterfaceRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateNetworkSwitchStackRoutingInterfaceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_network_switch_stack_routing_interface_201_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
