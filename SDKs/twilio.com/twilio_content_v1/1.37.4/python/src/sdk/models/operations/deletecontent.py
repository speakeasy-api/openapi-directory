import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_CONTENT_SERVERS = [
	"https://content.twilio.com",
]


@dataclasses.dataclass
class DeleteContentPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteContentSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteContentRequest:
    path_params: DeleteContentPathParams = dataclasses.field()
    security: DeleteContentSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteContentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
