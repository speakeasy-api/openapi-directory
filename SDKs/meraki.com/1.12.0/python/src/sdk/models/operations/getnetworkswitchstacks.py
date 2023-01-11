import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkSwitchStacksPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkSwitchStacksRequest:
    path_params: GetNetworkSwitchStacksPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkSwitchStacksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_switch_stacks_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
