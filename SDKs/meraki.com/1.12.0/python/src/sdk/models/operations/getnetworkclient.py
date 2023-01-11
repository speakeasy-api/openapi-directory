import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkClientPathParams:
    client_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'clientId', 'style': 'simple', 'explode': False }})
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkClientRequest:
    path_params: GetNetworkClientPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkClientResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_client_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
