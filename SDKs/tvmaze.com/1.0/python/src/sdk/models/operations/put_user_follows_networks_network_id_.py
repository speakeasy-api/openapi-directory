import dataclasses
from typing import Optional
from ..shared import networkfollow as shared_networkfollow


@dataclasses.dataclass
class PutUserFollowsNetworksNetworkIDPathParams:
    network_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'network_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutUserFollowsNetworksNetworkIDRequest:
    path_params: PutUserFollowsNetworksNetworkIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PutUserFollowsNetworksNetworkIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    network_follow: Optional[shared_networkfollow.NetworkFollow] = dataclasses.field(default=None)
    
