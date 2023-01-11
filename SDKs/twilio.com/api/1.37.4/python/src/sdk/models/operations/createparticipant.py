import dataclasses
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import api_v2010_account_conference_participant as shared_api_v2010_account_conference_participant


CREATE_PARTICIPANT_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class CreateParticipantPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    conference_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ConferenceSid', 'style': 'simple', 'explode': False }})
    
class CreateParticipantCreateParticipantRequestAmdStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateParticipantCreateParticipantRequestConferenceRecordingStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateParticipantCreateParticipantRequestConferenceStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateParticipantCreateParticipantRequestRecordingStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateParticipantCreateParticipantRequestStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateParticipantCreateParticipantRequestWaitMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclasses.dataclass
class CreateParticipantCreateParticipantRequest:
    from_: str = dataclasses.field(metadata={'form': { 'field_name': 'From' }})
    to: str = dataclasses.field(metadata={'form': { 'field_name': 'To' }})
    amd_status_callback: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AmdStatusCallback' }})
    amd_status_callback_method: Optional[CreateParticipantCreateParticipantRequestAmdStatusCallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AmdStatusCallbackMethod' }})
    beep: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Beep' }})
    byoc: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Byoc' }})
    call_reason: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CallReason' }})
    call_sid_to_coach: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CallSidToCoach' }})
    caller_id: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CallerId' }})
    coaching: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Coaching' }})
    conference_record: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ConferenceRecord' }})
    conference_recording_status_callback: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ConferenceRecordingStatusCallback' }})
    conference_recording_status_callback_event: Optional[list[str]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ConferenceRecordingStatusCallbackEvent' }})
    conference_recording_status_callback_method: Optional[CreateParticipantCreateParticipantRequestConferenceRecordingStatusCallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ConferenceRecordingStatusCallbackMethod' }})
    conference_status_callback: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ConferenceStatusCallback' }})
    conference_status_callback_event: Optional[list[str]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ConferenceStatusCallbackEvent' }})
    conference_status_callback_method: Optional[CreateParticipantCreateParticipantRequestConferenceStatusCallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ConferenceStatusCallbackMethod' }})
    conference_trim: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ConferenceTrim' }})
    early_media: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'EarlyMedia' }})
    end_conference_on_exit: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'EndConferenceOnExit' }})
    jitter_buffer_size: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'JitterBufferSize' }})
    label: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Label' }})
    machine_detection: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'MachineDetection' }})
    machine_detection_silence_timeout: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'MachineDetectionSilenceTimeout' }})
    machine_detection_speech_end_threshold: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'MachineDetectionSpeechEndThreshold' }})
    machine_detection_speech_threshold: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'MachineDetectionSpeechThreshold' }})
    machine_detection_timeout: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'MachineDetectionTimeout' }})
    max_participants: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'MaxParticipants' }})
    muted: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Muted' }})
    record: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Record' }})
    recording_channels: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'RecordingChannels' }})
    recording_status_callback: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'RecordingStatusCallback' }})
    recording_status_callback_event: Optional[list[str]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'RecordingStatusCallbackEvent' }})
    recording_status_callback_method: Optional[CreateParticipantCreateParticipantRequestRecordingStatusCallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'RecordingStatusCallbackMethod' }})
    recording_track: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'RecordingTrack' }})
    region: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Region' }})
    sip_auth_password: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SipAuthPassword' }})
    sip_auth_username: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SipAuthUsername' }})
    start_conference_on_enter: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StartConferenceOnEnter' }})
    status_callback: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    status_callback_event: Optional[list[str]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StatusCallbackEvent' }})
    status_callback_method: Optional[CreateParticipantCreateParticipantRequestStatusCallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StatusCallbackMethod' }})
    time_limit: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'TimeLimit' }})
    timeout: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Timeout' }})
    wait_method: Optional[CreateParticipantCreateParticipantRequestWaitMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'WaitMethod' }})
    wait_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'WaitUrl' }})
    

@dataclasses.dataclass
class CreateParticipantSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateParticipantRequest:
    path_params: CreateParticipantPathParams = dataclasses.field()
    security: CreateParticipantSecurity = dataclasses.field()
    request: Optional[CreateParticipantCreateParticipantRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateParticipantResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_conference_participant: Optional[shared_api_v2010_account_conference_participant.APIV2010AccountConferenceParticipant] = dataclasses.field(default=None)
    
