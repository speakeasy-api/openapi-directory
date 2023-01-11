import dataclasses



@dataclasses.dataclass
class SecretsChoicesReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SecretsChoicesReadRequest:
    path_params: SecretsChoicesReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class SecretsChoicesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
