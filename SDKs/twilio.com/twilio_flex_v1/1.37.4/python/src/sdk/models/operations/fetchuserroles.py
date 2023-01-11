import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import flex_v1_user_roles as shared_flex_v1_user_roles


FETCH_USER_ROLES_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclasses.dataclass
class FetchUserRolesHeaders:
    token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchUserRolesSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchUserRolesRequest:
    headers: FetchUserRolesHeaders = dataclasses.field()
    security: FetchUserRolesSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchUserRolesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flex_v1_user_roles: Optional[shared_flex_v1_user_roles.FlexV1UserRoles] = dataclasses.field(default=None)
    
