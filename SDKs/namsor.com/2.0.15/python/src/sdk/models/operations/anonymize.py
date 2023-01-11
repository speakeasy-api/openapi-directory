import dataclasses



@dataclasses.dataclass
class AnonymizePathParams:
    anonymized: bool = dataclasses.field(metadata={'path_param': { 'field_name': 'anonymized', 'style': 'simple', 'explode': False }})
    source: str = dataclasses.field(metadata={'path_param': { 'field_name': 'source', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AnonymizeRequest:
    path_params: AnonymizePathParams = dataclasses.field()
    

@dataclasses.dataclass
class AnonymizeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
