import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import trunking_v1_trunk_credential_list as shared_trunking_v1_trunk_credential_list


CREATE_CREDENTIAL_LIST_SERVERS = [
	"https://trunking.twilio.com",
]


@dataclasses.dataclass
class CreateCredentialListPathParams:
    trunk_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'TrunkSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateCredentialListCreateCredentialListRequest:
    credential_list_sid: str = dataclasses.field(metadata={'form': { 'field_name': 'CredentialListSid' }})
    

@dataclasses.dataclass
class CreateCredentialListSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateCredentialListRequest:
    path_params: CreateCredentialListPathParams = dataclasses.field()
    security: CreateCredentialListSecurity = dataclasses.field()
    request: Optional[CreateCredentialListCreateCredentialListRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateCredentialListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    trunking_v1_trunk_credential_list: Optional[shared_trunking_v1_trunk_credential_list.TrunkingV1TrunkCredentialList] = dataclasses.field(default=None)
    
