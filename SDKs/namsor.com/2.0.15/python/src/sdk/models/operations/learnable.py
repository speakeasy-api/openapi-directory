import dataclasses



@dataclasses.dataclass
class LearnablePathParams:
    learnable: bool = dataclasses.field(metadata={'path_param': { 'field_name': 'learnable', 'style': 'simple', 'explode': False }})
    source: str = dataclasses.field(metadata={'path_param': { 'field_name': 'source', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class LearnableRequest:
    path_params: LearnablePathParams = dataclasses.field()
    

@dataclasses.dataclass
class LearnableResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
