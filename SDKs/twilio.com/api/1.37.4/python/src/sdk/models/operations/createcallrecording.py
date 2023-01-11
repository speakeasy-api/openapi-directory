import dataclasses
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import api_v2010_account_call_call_recording as shared_api_v2010_account_call_call_recording


CREATE_CALL_RECORDING_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class CreateCallRecordingPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    call_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    
class CreateCallRecordingCreateCallRecordingRequestRecordingStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclasses.dataclass
class CreateCallRecordingCreateCallRecordingRequest:
    recording_channels: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'RecordingChannels' }})
    recording_status_callback: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'RecordingStatusCallback' }})
    recording_status_callback_event: Optional[list[str]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'RecordingStatusCallbackEvent' }})
    recording_status_callback_method: Optional[CreateCallRecordingCreateCallRecordingRequestRecordingStatusCallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'RecordingStatusCallbackMethod' }})
    recording_track: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'RecordingTrack' }})
    trim: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Trim' }})
    

@dataclasses.dataclass
class CreateCallRecordingSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateCallRecordingRequest:
    path_params: CreateCallRecordingPathParams = dataclasses.field()
    security: CreateCallRecordingSecurity = dataclasses.field()
    request: Optional[CreateCallRecordingCreateCallRecordingRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateCallRecordingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_call_call_recording: Optional[shared_api_v2010_account_call_call_recording.APIV2010AccountCallCallRecording] = dataclasses.field(default=None)
    
