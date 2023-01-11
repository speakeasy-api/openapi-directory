import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_FACTOR_SERVERS = [
	"https://verify.twilio.com",
]


@dataclasses.dataclass
class DeleteFactorPathParams:
    identity: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteFactorSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteFactorRequest:
    path_params: DeleteFactorPathParams = dataclasses.field()
    security: DeleteFactorSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteFactorResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
