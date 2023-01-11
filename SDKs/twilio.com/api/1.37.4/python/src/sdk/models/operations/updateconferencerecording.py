import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import conference_recording_enum_status_enum as shared_conference_recording_enum_status_enum
from ..shared import security as shared_security
from ..shared import api_v2010_account_conference_conference_recording as shared_api_v2010_account_conference_conference_recording


UPDATE_CONFERENCE_RECORDING_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class UpdateConferenceRecordingPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    conference_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ConferenceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateConferenceRecordingUpdateConferenceRecordingRequest:
    status: shared_conference_recording_enum_status_enum.ConferenceRecordingEnumStatusEnum = dataclasses.field(metadata={'form': { 'field_name': 'Status' }})
    pause_behavior: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'PauseBehavior' }})
    

@dataclasses.dataclass
class UpdateConferenceRecordingSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateConferenceRecordingRequest:
    path_params: UpdateConferenceRecordingPathParams = dataclasses.field()
    security: UpdateConferenceRecordingSecurity = dataclasses.field()
    request: Optional[UpdateConferenceRecordingUpdateConferenceRecordingRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateConferenceRecordingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_conference_conference_recording: Optional[shared_api_v2010_account_conference_conference_recording.APIV2010AccountConferenceConferenceRecording] = dataclasses.field(default=None)
    
