import dataclasses



@dataclasses.dataclass
class VirtualizationClustersDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class VirtualizationClustersDeleteRequest:
    path_params: VirtualizationClustersDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class VirtualizationClustersDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
