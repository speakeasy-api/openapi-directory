import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class CreateNetworkSwitchRoutingMulticastRendezvousPointPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkSwitchRoutingMulticastRendezvousPointRequestBody:
    interface_ip: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interfaceIp') }})
    multicast_group: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('multicastGroup') }})
    

@dataclasses.dataclass
class CreateNetworkSwitchRoutingMulticastRendezvousPointRequest:
    path_params: CreateNetworkSwitchRoutingMulticastRendezvousPointPathParams = dataclasses.field()
    request: CreateNetworkSwitchRoutingMulticastRendezvousPointRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateNetworkSwitchRoutingMulticastRendezvousPointResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_network_switch_routing_multicast_rendezvous_point_201_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
