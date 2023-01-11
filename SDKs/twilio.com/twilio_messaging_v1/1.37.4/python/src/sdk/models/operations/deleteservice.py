import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_SERVICE_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclasses.dataclass
class DeleteServicePathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteServiceSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteServiceRequest:
    path_params: DeleteServicePathParams = dataclasses.field()
    security: DeleteServiceSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteServiceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
