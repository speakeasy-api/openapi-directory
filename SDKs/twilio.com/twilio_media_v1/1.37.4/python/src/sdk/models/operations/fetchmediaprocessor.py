import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import media_v1_media_processor as shared_media_v1_media_processor


FETCH_MEDIA_PROCESSOR_SERVERS = [
	"https://media.twilio.com",
]


@dataclasses.dataclass
class FetchMediaProcessorPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchMediaProcessorSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchMediaProcessorRequest:
    path_params: FetchMediaProcessorPathParams = dataclasses.field()
    security: FetchMediaProcessorSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchMediaProcessorResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    media_v1_media_processor: Optional[shared_media_v1_media_processor.MediaV1MediaProcessor] = dataclasses.field(default=None)
    
