from dataclasses import dataclass, field
from typing import Optional
DELETE_RECORDING_SERVERS = [
	"https://video.twilio.com",
]


@dataclass
class DeleteRecordingPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRecordingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteRecordingRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteRecordingPathParams = field(default=None)
    security: DeleteRecordingSecurity = field(default=None)
    

@dataclass
class DeleteRecordingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
