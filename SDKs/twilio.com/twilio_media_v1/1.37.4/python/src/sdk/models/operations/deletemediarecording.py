import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_MEDIA_RECORDING_SERVERS = [
	"https://media.twilio.com",
]


@dataclasses.dataclass
class DeleteMediaRecordingPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteMediaRecordingSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteMediaRecordingRequest:
    path_params: DeleteMediaRecordingPathParams = dataclasses.field()
    security: DeleteMediaRecordingSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteMediaRecordingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
