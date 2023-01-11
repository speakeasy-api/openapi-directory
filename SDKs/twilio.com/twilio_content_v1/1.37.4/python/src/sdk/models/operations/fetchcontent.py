import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import content_v1_content as shared_content_v1_content


FETCH_CONTENT_SERVERS = [
	"https://content.twilio.com",
]


@dataclasses.dataclass
class FetchContentPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchContentSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchContentRequest:
    path_params: FetchContentPathParams = dataclasses.field()
    security: FetchContentSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchContentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    content_v1_content: Optional[shared_content_v1_content.ContentV1Content] = dataclasses.field(default=None)
    
