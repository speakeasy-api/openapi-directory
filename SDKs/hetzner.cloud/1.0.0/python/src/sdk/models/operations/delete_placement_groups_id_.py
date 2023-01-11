import dataclasses



@dataclasses.dataclass
class DeletePlacementGroupsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeletePlacementGroupsIDRequest:
    path_params: DeletePlacementGroupsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeletePlacementGroupsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
