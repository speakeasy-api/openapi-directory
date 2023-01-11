import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import api_v2010_account_recording as shared_api_v2010_account_recording


FETCH_RECORDING_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class FetchRecordingPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchRecordingQueryParams:
    include_soft_deleted: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'IncludeSoftDeleted', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class FetchRecordingSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchRecordingRequest:
    path_params: FetchRecordingPathParams = dataclasses.field()
    query_params: FetchRecordingQueryParams = dataclasses.field()
    security: FetchRecordingSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchRecordingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_recording: Optional[shared_api_v2010_account_recording.APIV2010AccountRecording] = dataclasses.field(default=None)
    
