import dataclasses



@dataclasses.dataclass
class DeleteNetworkFloorPlanPathParams:
    floor_plan_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'floorPlanId', 'style': 'simple', 'explode': False }})
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteNetworkFloorPlanRequest:
    path_params: DeleteNetworkFloorPlanPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteNetworkFloorPlanResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
