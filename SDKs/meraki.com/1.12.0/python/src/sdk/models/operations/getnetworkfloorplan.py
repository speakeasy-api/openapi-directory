import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkFloorPlanPathParams:
    floor_plan_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'floorPlanId', 'style': 'simple', 'explode': False }})
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkFloorPlanRequest:
    path_params: GetNetworkFloorPlanPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkFloorPlanResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_floor_plan_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
