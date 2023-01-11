import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import api_v2010_account_sip_sip_credential_list_sip_credential as shared_api_v2010_account_sip_sip_credential_list_sip_credential


FETCH_SIP_CREDENTIAL_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class FetchSipCredentialPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    credential_list_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'CredentialListSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchSipCredentialSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchSipCredentialRequest:
    path_params: FetchSipCredentialPathParams = dataclasses.field()
    security: FetchSipCredentialSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchSipCredentialResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_sip_sip_credential_list_sip_credential: Optional[shared_api_v2010_account_sip_sip_credential_list_sip_credential.APIV2010AccountSipSipCredentialListSipCredential] = dataclasses.field(default=None)
    
