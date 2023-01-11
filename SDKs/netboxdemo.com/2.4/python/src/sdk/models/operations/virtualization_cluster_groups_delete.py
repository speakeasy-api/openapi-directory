import dataclasses



@dataclasses.dataclass
class VirtualizationClusterGroupsDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class VirtualizationClusterGroupsDeleteRequest:
    path_params: VirtualizationClusterGroupsDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class VirtualizationClusterGroupsDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
