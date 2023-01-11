import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import content_v1_content_approval_fetch as shared_content_v1_content_approval_fetch


FETCH_APPROVAL_FETCH_SERVERS = [
	"https://content.twilio.com",
]


@dataclasses.dataclass
class FetchApprovalFetchPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchApprovalFetchSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchApprovalFetchRequest:
    path_params: FetchApprovalFetchPathParams = dataclasses.field()
    security: FetchApprovalFetchSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchApprovalFetchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    content_v1_content_approval_fetch: Optional[shared_content_v1_content_approval_fetch.ContentV1ContentApprovalFetch] = dataclasses.field(default=None)
    
