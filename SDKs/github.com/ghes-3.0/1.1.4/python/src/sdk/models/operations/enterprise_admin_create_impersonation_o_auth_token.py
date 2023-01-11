import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import authorization as shared_authorization


@dataclasses.dataclass
class EnterpriseAdminCreateImpersonationOAuthTokenPathParams:
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminCreateImpersonationOAuthTokenRequestBody:
    scopes: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scopes') }})
    

@dataclasses.dataclass
class EnterpriseAdminCreateImpersonationOAuthTokenRequest:
    path_params: EnterpriseAdminCreateImpersonationOAuthTokenPathParams = dataclasses.field()
    request: Optional[EnterpriseAdminCreateImpersonationOAuthTokenRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EnterpriseAdminCreateImpersonationOAuthTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    authorization: Optional[shared_authorization.Authorization] = dataclasses.field(default=None)
    
