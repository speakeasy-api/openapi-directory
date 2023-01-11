import dataclasses



@dataclasses.dataclass
class ActionsDeleteOrgSecretPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    secret_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'secret_name', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsDeleteOrgSecretRequest:
    path_params: ActionsDeleteOrgSecretPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsDeleteOrgSecretResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
