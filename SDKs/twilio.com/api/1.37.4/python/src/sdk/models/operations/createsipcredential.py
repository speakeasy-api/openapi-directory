import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import api_v2010_account_sip_sip_credential_list_sip_credential as shared_api_v2010_account_sip_sip_credential_list_sip_credential


CREATE_SIP_CREDENTIAL_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class CreateSipCredentialPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    credential_list_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'CredentialListSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateSipCredentialCreateSipCredentialRequest:
    password: str = dataclasses.field(metadata={'form': { 'field_name': 'Password' }})
    username: str = dataclasses.field(metadata={'form': { 'field_name': 'Username' }})
    

@dataclasses.dataclass
class CreateSipCredentialSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateSipCredentialRequest:
    path_params: CreateSipCredentialPathParams = dataclasses.field()
    security: CreateSipCredentialSecurity = dataclasses.field()
    request: Optional[CreateSipCredentialCreateSipCredentialRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateSipCredentialResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_sip_sip_credential_list_sip_credential: Optional[shared_api_v2010_account_sip_sip_credential_list_sip_credential.APIV2010AccountSipSipCredentialListSipCredential] = dataclasses.field(default=None)
    
