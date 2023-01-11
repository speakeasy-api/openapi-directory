import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_BYOC_TRUNK_SERVERS = [
	"https://voice.twilio.com",
]


@dataclasses.dataclass
class DeleteByocTrunkPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteByocTrunkSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteByocTrunkRequest:
    path_params: DeleteByocTrunkPathParams = dataclasses.field()
    security: DeleteByocTrunkSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteByocTrunkResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
