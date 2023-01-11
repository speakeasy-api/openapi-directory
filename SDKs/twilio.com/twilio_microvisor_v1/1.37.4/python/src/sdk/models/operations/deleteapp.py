import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_APP_SERVERS = [
	"https://microvisor.twilio.com",
]


@dataclasses.dataclass
class DeleteAppPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteAppSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteAppRequest:
    path_params: DeleteAppPathParams = dataclasses.field()
    security: DeleteAppSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteAppResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
