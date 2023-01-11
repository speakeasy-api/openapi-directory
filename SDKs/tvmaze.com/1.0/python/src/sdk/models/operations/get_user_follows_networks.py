import dataclasses
from typing import Optional
from enum import Enum
from ..shared import networkfollow as shared_networkfollow

class GetUserFollowsNetworksEmbedEnum(str, Enum):
    NETWORK = "network"


@dataclasses.dataclass
class GetUserFollowsNetworksQueryParams:
    embed: Optional[GetUserFollowsNetworksEmbedEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'embed', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetUserFollowsNetworksRequest:
    query_params: GetUserFollowsNetworksQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUserFollowsNetworksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    network_follows: Optional[list[shared_networkfollow.NetworkFollow]] = dataclasses.field(default=None)
    
