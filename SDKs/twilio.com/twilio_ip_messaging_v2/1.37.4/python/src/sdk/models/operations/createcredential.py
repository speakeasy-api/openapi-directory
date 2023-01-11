import dataclasses
from typing import Optional
from enum import Enum
from ..shared import credential_enum_push_service_enum as shared_credential_enum_push_service_enum
from ..shared import security as shared_security
from ..shared import ip_messaging_v2_credential as shared_ip_messaging_v2_credential


CREATE_CREDENTIAL_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclasses.dataclass
class CreateCredentialCreateCredentialRequest:
    type: shared_credential_enum_push_service_enum.CredentialEnumPushServiceEnum = dataclasses.field(metadata={'form': { 'field_name': 'Type' }})
    api_key: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ApiKey' }})
    certificate: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Certificate' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    private_key: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'PrivateKey' }})
    sandbox: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Sandbox' }})
    secret: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Secret' }})
    

@dataclasses.dataclass
class CreateCredentialSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateCredentialRequest:
    security: CreateCredentialSecurity = dataclasses.field()
    request: Optional[CreateCredentialCreateCredentialRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateCredentialResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    ip_messaging_v2_credential: Optional[shared_ip_messaging_v2_credential.IPMessagingV2Credential] = dataclasses.field(default=None)
    
