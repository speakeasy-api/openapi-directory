import dataclasses



@dataclasses.dataclass
class CircuitsProvidersDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CircuitsProvidersDeleteRequest:
    path_params: CircuitsProvidersDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class CircuitsProvidersDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
