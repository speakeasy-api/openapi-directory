import dataclasses



@dataclasses.dataclass
class EnterpriseAdminDeletePersonalAccessTokenPathParams:
    token_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'token_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnterpriseAdminDeletePersonalAccessTokenRequest:
    path_params: EnterpriseAdminDeletePersonalAccessTokenPathParams = dataclasses.field()
    

@dataclasses.dataclass
class EnterpriseAdminDeletePersonalAccessTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
