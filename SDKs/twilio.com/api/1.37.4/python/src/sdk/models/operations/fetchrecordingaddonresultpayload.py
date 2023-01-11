import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import api_v2010_account_recording_recording_add_on_result_recording_add_on_result_payload as shared_api_v2010_account_recording_recording_add_on_result_recording_add_on_result_payload


FETCH_RECORDING_ADD_ON_RESULT_PAYLOAD_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class FetchRecordingAddOnResultPayloadPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    add_on_result_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AddOnResultSid', 'style': 'simple', 'explode': False }})
    reference_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ReferenceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchRecordingAddOnResultPayloadSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchRecordingAddOnResultPayloadRequest:
    path_params: FetchRecordingAddOnResultPayloadPathParams = dataclasses.field()
    security: FetchRecordingAddOnResultPayloadSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchRecordingAddOnResultPayloadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_recording_recording_add_on_result_recording_add_on_result_payload: Optional[shared_api_v2010_account_recording_recording_add_on_result_recording_add_on_result_payload.APIV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload] = dataclasses.field(default=None)
    
