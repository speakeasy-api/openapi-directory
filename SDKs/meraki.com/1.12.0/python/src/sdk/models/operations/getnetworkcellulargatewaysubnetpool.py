import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkCellularGatewaySubnetPoolPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkCellularGatewaySubnetPoolRequest:
    path_params: GetNetworkCellularGatewaySubnetPoolPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkCellularGatewaySubnetPoolResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_cellular_gateway_subnet_pool_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
