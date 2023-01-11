import dataclasses
from typing import Optional
from ..shared import authentication_token as shared_authentication_token


@dataclasses.dataclass
class EnterpriseAdminCreateRemoveTokenForEnterprisePathParams:
    enterprise: str = dataclasses.field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnterpriseAdminCreateRemoveTokenForEnterpriseRequest:
    path_params: EnterpriseAdminCreateRemoveTokenForEnterprisePathParams = dataclasses.field()
    

@dataclasses.dataclass
class EnterpriseAdminCreateRemoveTokenForEnterpriseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    authentication_token: Optional[shared_authentication_token.AuthenticationToken] = dataclasses.field(default=None)
    
