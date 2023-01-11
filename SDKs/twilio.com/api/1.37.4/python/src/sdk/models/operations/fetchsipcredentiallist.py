import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import api_v2010_account_sip_sip_credential_list as shared_api_v2010_account_sip_sip_credential_list


FETCH_SIP_CREDENTIAL_LIST_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class FetchSipCredentialListPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchSipCredentialListSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchSipCredentialListRequest:
    path_params: FetchSipCredentialListPathParams = dataclasses.field()
    security: FetchSipCredentialListSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchSipCredentialListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_sip_sip_credential_list: Optional[shared_api_v2010_account_sip_sip_credential_list.APIV2010AccountSipSipCredentialList] = dataclasses.field(default=None)
    
