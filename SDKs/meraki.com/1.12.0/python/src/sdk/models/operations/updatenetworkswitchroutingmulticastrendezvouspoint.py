import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkSwitchRoutingMulticastRendezvousPointPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    rendezvous_point_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'rendezvousPointId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkSwitchRoutingMulticastRendezvousPointRequestBody:
    interface_ip: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interfaceIp') }})
    multicast_group: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('multicastGroup') }})
    

@dataclasses.dataclass
class UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest:
    path_params: UpdateNetworkSwitchRoutingMulticastRendezvousPointPathParams = dataclasses.field()
    request: UpdateNetworkSwitchRoutingMulticastRendezvousPointRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkSwitchRoutingMulticastRendezvousPointResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_switch_routing_multicast_rendezvous_point_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
