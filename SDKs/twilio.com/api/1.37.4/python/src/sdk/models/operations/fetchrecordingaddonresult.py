import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import api_v2010_account_recording_recording_add_on_result as shared_api_v2010_account_recording_recording_add_on_result


FETCH_RECORDING_ADD_ON_RESULT_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class FetchRecordingAddOnResultPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    reference_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ReferenceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchRecordingAddOnResultSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchRecordingAddOnResultRequest:
    path_params: FetchRecordingAddOnResultPathParams = dataclasses.field()
    security: FetchRecordingAddOnResultSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchRecordingAddOnResultResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_recording_recording_add_on_result: Optional[shared_api_v2010_account_recording_recording_add_on_result.APIV2010AccountRecordingRecordingAddOnResult] = dataclasses.field(default=None)
    
