import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_FUNCTION_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclasses.dataclass
class DeleteFunctionPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteFunctionSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteFunctionRequest:
    path_params: DeleteFunctionPathParams = dataclasses.field()
    security: DeleteFunctionSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteFunctionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
