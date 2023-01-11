import dataclasses



@dataclasses.dataclass
class EnterpriseAdminDeleteImpersonationOAuthTokenPathParams:
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnterpriseAdminDeleteImpersonationOAuthTokenRequest:
    path_params: EnterpriseAdminDeleteImpersonationOAuthTokenPathParams = dataclasses.field()
    

@dataclasses.dataclass
class EnterpriseAdminDeleteImpersonationOAuthTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
