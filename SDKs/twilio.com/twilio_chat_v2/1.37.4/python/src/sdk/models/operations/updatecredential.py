import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import chat_v2_credential as shared_chat_v2_credential


UPDATE_CREDENTIAL_SERVERS = [
	"https://chat.twilio.com",
]


@dataclasses.dataclass
class UpdateCredentialPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateCredentialUpdateCredentialRequest:
    api_key: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ApiKey' }})
    certificate: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Certificate' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    private_key: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'PrivateKey' }})
    sandbox: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Sandbox' }})
    secret: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Secret' }})
    

@dataclasses.dataclass
class UpdateCredentialSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateCredentialRequest:
    path_params: UpdateCredentialPathParams = dataclasses.field()
    security: UpdateCredentialSecurity = dataclasses.field()
    request: Optional[UpdateCredentialUpdateCredentialRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateCredentialResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    chat_v2_credential: Optional[shared_chat_v2_credential.ChatV2Credential] = dataclasses.field(default=None)
    
