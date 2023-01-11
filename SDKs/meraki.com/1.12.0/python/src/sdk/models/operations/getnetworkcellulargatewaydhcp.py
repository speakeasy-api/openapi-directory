import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkCellularGatewayDhcpPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkCellularGatewayDhcpRequest:
    path_params: GetNetworkCellularGatewayDhcpPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkCellularGatewayDhcpResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_cellular_gateway_dhcp_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
