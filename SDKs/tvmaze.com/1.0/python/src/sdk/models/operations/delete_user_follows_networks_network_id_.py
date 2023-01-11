import dataclasses



@dataclasses.dataclass
class DeleteUserFollowsNetworksNetworkIDPathParams:
    network_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'network_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteUserFollowsNetworksNetworkIDRequest:
    path_params: DeleteUserFollowsNetworksNetworkIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteUserFollowsNetworksNetworkIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
