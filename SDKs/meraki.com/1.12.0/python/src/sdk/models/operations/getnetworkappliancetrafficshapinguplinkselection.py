import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkApplianceTrafficShapingUplinkSelectionPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkApplianceTrafficShapingUplinkSelectionRequest:
    path_params: GetNetworkApplianceTrafficShapingUplinkSelectionPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkApplianceTrafficShapingUplinkSelectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_appliance_traffic_shaping_uplink_selection_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
