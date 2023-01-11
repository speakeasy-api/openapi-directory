import dataclasses



@dataclasses.dataclass
class ExtrasTopologyMapsDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ExtrasTopologyMapsDeleteRequest:
    path_params: ExtrasTopologyMapsDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ExtrasTopologyMapsDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
