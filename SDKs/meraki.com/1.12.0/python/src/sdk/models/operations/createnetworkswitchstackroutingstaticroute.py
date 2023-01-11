import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class CreateNetworkSwitchStackRoutingStaticRoutePathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    switch_stack_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'switchStackId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkSwitchStackRoutingStaticRouteRequestBody:
    next_hop_ip: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextHopIp') }})
    subnet: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnet') }})
    advertise_via_ospf_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiseViaOspfEnabled') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    prefer_over_ospf_routes_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferOverOspfRoutesEnabled') }})
    

@dataclasses.dataclass
class CreateNetworkSwitchStackRoutingStaticRouteRequest:
    path_params: CreateNetworkSwitchStackRoutingStaticRoutePathParams = dataclasses.field()
    request: CreateNetworkSwitchStackRoutingStaticRouteRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateNetworkSwitchStackRoutingStaticRouteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_network_switch_stack_routing_static_route_201_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
