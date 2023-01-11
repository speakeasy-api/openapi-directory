import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import notify_v1_credential as shared_notify_v1_credential


FETCH_CREDENTIAL_SERVERS = [
	"https://notify.twilio.com",
]


@dataclasses.dataclass
class FetchCredentialPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchCredentialSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchCredentialRequest:
    path_params: FetchCredentialPathParams = dataclasses.field()
    security: FetchCredentialSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchCredentialResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    notify_v1_credential: Optional[shared_notify_v1_credential.NotifyV1Credential] = dataclasses.field(default=None)
    
