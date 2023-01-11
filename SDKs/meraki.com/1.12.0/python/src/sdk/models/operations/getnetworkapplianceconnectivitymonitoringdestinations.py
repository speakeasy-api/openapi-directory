import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkApplianceConnectivityMonitoringDestinationsPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkApplianceConnectivityMonitoringDestinationsRequest:
    path_params: GetNetworkApplianceConnectivityMonitoringDestinationsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkApplianceConnectivityMonitoringDestinationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_appliance_connectivity_monitoring_destinations_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
