import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class SwapNetworkApplianceWarmSparePathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SwapNetworkApplianceWarmSpareRequest:
    path_params: SwapNetworkApplianceWarmSparePathParams = dataclasses.field()
    

@dataclasses.dataclass
class SwapNetworkApplianceWarmSpareResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    swap_network_appliance_warm_spare_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
