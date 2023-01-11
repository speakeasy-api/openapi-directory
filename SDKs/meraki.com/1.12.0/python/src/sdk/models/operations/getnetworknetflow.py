import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkNetflowPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkNetflowRequest:
    path_params: GetNetworkNetflowPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkNetflowResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_netflow_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
