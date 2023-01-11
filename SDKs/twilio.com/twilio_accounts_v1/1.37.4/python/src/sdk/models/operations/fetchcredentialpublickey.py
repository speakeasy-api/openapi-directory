import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import accounts_v1_credential_credential_public_key as shared_accounts_v1_credential_credential_public_key


FETCH_CREDENTIAL_PUBLIC_KEY_SERVERS = [
	"https://accounts.twilio.com",
]


@dataclasses.dataclass
class FetchCredentialPublicKeyPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchCredentialPublicKeySecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchCredentialPublicKeyRequest:
    path_params: FetchCredentialPublicKeyPathParams = dataclasses.field()
    security: FetchCredentialPublicKeySecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchCredentialPublicKeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    accounts_v1_credential_credential_public_key: Optional[shared_accounts_v1_credential_credential_public_key.AccountsV1CredentialCredentialPublicKey] = dataclasses.field(default=None)
    
