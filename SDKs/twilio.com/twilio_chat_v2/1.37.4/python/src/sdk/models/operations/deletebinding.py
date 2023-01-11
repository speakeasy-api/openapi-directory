import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_BINDING_SERVERS = [
	"https://chat.twilio.com",
]


@dataclasses.dataclass
class DeleteBindingPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteBindingSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteBindingRequest:
    path_params: DeleteBindingPathParams = dataclasses.field()
    security: DeleteBindingSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteBindingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
