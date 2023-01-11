import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import accounts_v1_credential_credential_public_key as shared_accounts_v1_credential_credential_public_key


UPDATE_CREDENTIAL_PUBLIC_KEY_SERVERS = [
	"https://accounts.twilio.com",
]


@dataclasses.dataclass
class UpdateCredentialPublicKeyPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateCredentialPublicKeyUpdateCredentialPublicKeyRequest:
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclasses.dataclass
class UpdateCredentialPublicKeySecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateCredentialPublicKeyRequest:
    path_params: UpdateCredentialPublicKeyPathParams = dataclasses.field()
    security: UpdateCredentialPublicKeySecurity = dataclasses.field()
    request: Optional[UpdateCredentialPublicKeyUpdateCredentialPublicKeyRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateCredentialPublicKeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    accounts_v1_credential_credential_public_key: Optional[shared_accounts_v1_credential_credential_public_key.AccountsV1CredentialCredentialPublicKey] = dataclasses.field(default=None)
    
