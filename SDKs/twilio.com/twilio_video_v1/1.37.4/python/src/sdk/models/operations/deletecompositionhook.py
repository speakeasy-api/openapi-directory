import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_COMPOSITION_HOOK_SERVERS = [
	"https://video.twilio.com",
]


@dataclasses.dataclass
class DeleteCompositionHookPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteCompositionHookSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteCompositionHookRequest:
    path_params: DeleteCompositionHookPathParams = dataclasses.field()
    security: DeleteCompositionHookSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteCompositionHookResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
