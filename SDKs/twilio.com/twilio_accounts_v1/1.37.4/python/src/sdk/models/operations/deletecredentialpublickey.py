import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_CREDENTIAL_PUBLIC_KEY_SERVERS = [
	"https://accounts.twilio.com",
]


@dataclasses.dataclass
class DeleteCredentialPublicKeyPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteCredentialPublicKeySecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteCredentialPublicKeyRequest:
    path_params: DeleteCredentialPublicKeyPathParams = dataclasses.field()
    security: DeleteCredentialPublicKeySecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteCredentialPublicKeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
