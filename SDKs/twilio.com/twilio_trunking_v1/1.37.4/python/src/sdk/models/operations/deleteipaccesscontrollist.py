import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_IP_ACCESS_CONTROL_LIST_SERVERS = [
	"https://trunking.twilio.com",
]


@dataclasses.dataclass
class DeleteIPAccessControlListPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    trunk_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'TrunkSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteIPAccessControlListSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteIPAccessControlListRequest:
    path_params: DeleteIPAccessControlListPathParams = dataclasses.field()
    security: DeleteIPAccessControlListSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteIPAccessControlListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
