import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkFloorPlansPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkFloorPlansRequest:
    path_params: GetNetworkFloorPlansPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkFloorPlansResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_floor_plans_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
