import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import video_v1_composition_hook as shared_video_v1_composition_hook


FETCH_COMPOSITION_HOOK_SERVERS = [
	"https://video.twilio.com",
]


@dataclasses.dataclass
class FetchCompositionHookPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchCompositionHookSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchCompositionHookRequest:
    path_params: FetchCompositionHookPathParams = dataclasses.field()
    security: FetchCompositionHookSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchCompositionHookResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    video_v1_composition_hook: Optional[shared_video_v1_composition_hook.VideoV1CompositionHook] = dataclasses.field(default=None)
    
