import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkCellularGatewayConnectivityMonitoringDestinationsPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkCellularGatewayConnectivityMonitoringDestinationsRequest:
    path_params: GetNetworkCellularGatewayConnectivityMonitoringDestinationsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkCellularGatewayConnectivityMonitoringDestinationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_cellular_gateway_connectivity_monitoring_destinations_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
