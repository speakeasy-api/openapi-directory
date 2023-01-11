import dataclasses



@dataclasses.dataclass
class DeleteNetworkSwitchRoutingMulticastRendezvousPointPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    rendezvous_point_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'rendezvousPointId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteNetworkSwitchRoutingMulticastRendezvousPointRequest:
    path_params: DeleteNetworkSwitchRoutingMulticastRendezvousPointPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteNetworkSwitchRoutingMulticastRendezvousPointResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
