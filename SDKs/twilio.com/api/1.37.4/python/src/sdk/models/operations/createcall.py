import dataclasses
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import api_v2010_account_call as shared_api_v2010_account_call


CREATE_CALL_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class CreateCallPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    
class CreateCallCreateCallRequestAsyncAmdStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateCallCreateCallRequestFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateCallCreateCallRequestMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateCallCreateCallRequestRecordingStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateCallCreateCallRequestStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclasses.dataclass
class CreateCallCreateCallRequest:
    from_: str = dataclasses.field(metadata={'form': { 'field_name': 'From' }})
    to: str = dataclasses.field(metadata={'form': { 'field_name': 'To' }})
    application_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ApplicationSid' }})
    async_amd: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AsyncAmd' }})
    async_amd_status_callback: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AsyncAmdStatusCallback' }})
    async_amd_status_callback_method: Optional[CreateCallCreateCallRequestAsyncAmdStatusCallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AsyncAmdStatusCallbackMethod' }})
    byoc: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Byoc' }})
    call_reason: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CallReason' }})
    call_token: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CallToken' }})
    caller_id: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CallerId' }})
    fallback_method: Optional[CreateCallCreateCallRequestFallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FallbackMethod' }})
    fallback_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FallbackUrl' }})
    machine_detection: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'MachineDetection' }})
    machine_detection_silence_timeout: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'MachineDetectionSilenceTimeout' }})
    machine_detection_speech_end_threshold: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'MachineDetectionSpeechEndThreshold' }})
    machine_detection_speech_threshold: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'MachineDetectionSpeechThreshold' }})
    machine_detection_timeout: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'MachineDetectionTimeout' }})
    method: Optional[CreateCallCreateCallRequestMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Method' }})
    record: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Record' }})
    recording_channels: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'RecordingChannels' }})
    recording_status_callback: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'RecordingStatusCallback' }})
    recording_status_callback_event: Optional[list[str]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'RecordingStatusCallbackEvent' }})
    recording_status_callback_method: Optional[CreateCallCreateCallRequestRecordingStatusCallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'RecordingStatusCallbackMethod' }})
    recording_track: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'RecordingTrack' }})
    send_digits: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SendDigits' }})
    sip_auth_password: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SipAuthPassword' }})
    sip_auth_username: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SipAuthUsername' }})
    status_callback: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    status_callback_event: Optional[list[str]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StatusCallbackEvent' }})
    status_callback_method: Optional[CreateCallCreateCallRequestStatusCallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StatusCallbackMethod' }})
    time_limit: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'TimeLimit' }})
    timeout: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Timeout' }})
    trim: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Trim' }})
    twiml: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Twiml' }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Url' }})
    

@dataclasses.dataclass
class CreateCallSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateCallRequest:
    path_params: CreateCallPathParams = dataclasses.field()
    security: CreateCallSecurity = dataclasses.field()
    request: Optional[CreateCallCreateCallRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateCallResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_call: Optional[shared_api_v2010_account_call.APIV2010AccountCall] = dataclasses.field(default=None)
    
