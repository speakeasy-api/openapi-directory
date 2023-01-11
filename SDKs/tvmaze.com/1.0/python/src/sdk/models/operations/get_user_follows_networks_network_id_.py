import dataclasses
from typing import Optional
from ..shared import networkfollow as shared_networkfollow


@dataclasses.dataclass
class GetUserFollowsNetworksNetworkIDPathParams:
    network_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'network_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUserFollowsNetworksNetworkIDRequest:
    path_params: GetUserFollowsNetworksNetworkIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUserFollowsNetworksNetworkIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    network_follow: Optional[shared_networkfollow.NetworkFollow] = dataclasses.field(default=None)
    
