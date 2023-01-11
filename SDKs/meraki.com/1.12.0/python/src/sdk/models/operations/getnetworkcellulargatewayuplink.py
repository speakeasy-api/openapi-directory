import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkCellularGatewayUplinkPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkCellularGatewayUplinkRequest:
    path_params: GetNetworkCellularGatewayUplinkPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkCellularGatewayUplinkResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_cellular_gateway_uplink_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
