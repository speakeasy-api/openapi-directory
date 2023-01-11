import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_COMPOSITION_SERVERS = [
	"https://video.twilio.com",
]


@dataclasses.dataclass
class DeleteCompositionPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteCompositionSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteCompositionRequest:
    path_params: DeleteCompositionPathParams = dataclasses.field()
    security: DeleteCompositionSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteCompositionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
