import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import trunking_v1_trunk_credential_list as shared_trunking_v1_trunk_credential_list


FETCH_CREDENTIAL_LIST_SERVERS = [
	"https://trunking.twilio.com",
]


@dataclasses.dataclass
class FetchCredentialListPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    trunk_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'TrunkSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchCredentialListSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchCredentialListRequest:
    path_params: FetchCredentialListPathParams = dataclasses.field()
    security: FetchCredentialListSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchCredentialListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    trunking_v1_trunk_credential_list: Optional[shared_trunking_v1_trunk_credential_list.TrunkingV1TrunkCredentialList] = dataclasses.field(default=None)
    
