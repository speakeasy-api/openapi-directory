import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import video_v1_composition as shared_video_v1_composition


FETCH_COMPOSITION_SERVERS = [
	"https://video.twilio.com",
]


@dataclasses.dataclass
class FetchCompositionPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchCompositionSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchCompositionRequest:
    path_params: FetchCompositionPathParams = dataclasses.field()
    security: FetchCompositionSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchCompositionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    video_v1_composition: Optional[shared_video_v1_composition.VideoV1Composition] = dataclasses.field(default=None)
    
