import dataclasses



@dataclasses.dataclass
class GetOntologyTermPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOntologyTermRequest:
    path_params: GetOntologyTermPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOntologyTermResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
