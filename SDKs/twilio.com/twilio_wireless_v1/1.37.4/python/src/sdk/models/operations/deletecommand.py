import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_COMMAND_SERVERS = [
	"https://wireless.twilio.com",
]


@dataclasses.dataclass
class DeleteCommandPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteCommandSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteCommandRequest:
    path_params: DeleteCommandPathParams = dataclasses.field()
    security: DeleteCommandSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteCommandResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
