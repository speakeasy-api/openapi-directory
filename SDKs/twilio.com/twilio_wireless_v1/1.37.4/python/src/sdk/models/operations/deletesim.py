import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_SIM_SERVERS = [
	"https://wireless.twilio.com",
]


@dataclasses.dataclass
class DeleteSimPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteSimSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteSimRequest:
    path_params: DeleteSimPathParams = dataclasses.field()
    security: DeleteSimSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteSimResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
