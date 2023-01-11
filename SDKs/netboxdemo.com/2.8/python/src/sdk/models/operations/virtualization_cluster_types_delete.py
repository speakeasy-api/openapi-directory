import dataclasses



@dataclasses.dataclass
class VirtualizationClusterTypesDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class VirtualizationClusterTypesDeleteRequest:
    path_params: VirtualizationClusterTypesDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class VirtualizationClusterTypesDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
