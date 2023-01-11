import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkRequest:
    path_params: GetNetworkPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
