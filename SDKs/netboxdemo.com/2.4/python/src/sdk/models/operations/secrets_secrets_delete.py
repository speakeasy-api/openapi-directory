import dataclasses



@dataclasses.dataclass
class SecretsSecretsDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SecretsSecretsDeleteRequest:
    path_params: SecretsSecretsDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class SecretsSecretsDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
