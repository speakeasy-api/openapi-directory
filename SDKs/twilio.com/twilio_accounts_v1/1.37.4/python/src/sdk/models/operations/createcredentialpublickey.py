import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import accounts_v1_credential_credential_public_key as shared_accounts_v1_credential_credential_public_key


CREATE_CREDENTIAL_PUBLIC_KEY_SERVERS = [
	"https://accounts.twilio.com",
]


@dataclasses.dataclass
class CreateCredentialPublicKeyCreateCredentialPublicKeyRequest:
    public_key: str = dataclasses.field(metadata={'form': { 'field_name': 'PublicKey' }})
    account_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AccountSid' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclasses.dataclass
class CreateCredentialPublicKeySecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateCredentialPublicKeyRequest:
    security: CreateCredentialPublicKeySecurity = dataclasses.field()
    request: Optional[CreateCredentialPublicKeyCreateCredentialPublicKeyRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateCredentialPublicKeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    accounts_v1_credential_credential_public_key: Optional[shared_accounts_v1_credential_credential_public_key.AccountsV1CredentialCredentialPublicKey] = dataclasses.field(default=None)
    
