import dataclasses



@dataclasses.dataclass
class SecretsSecretRolesDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SecretsSecretRolesDeleteRequest:
    path_params: SecretsSecretRolesDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class SecretsSecretRolesDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
