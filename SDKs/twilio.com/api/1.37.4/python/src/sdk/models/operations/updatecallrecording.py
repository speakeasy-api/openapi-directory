import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import call_recording_enum_status_enum as shared_call_recording_enum_status_enum
from ..shared import security as shared_security
from ..shared import api_v2010_account_call_call_recording as shared_api_v2010_account_call_call_recording


UPDATE_CALL_RECORDING_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class UpdateCallRecordingPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    call_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateCallRecordingUpdateCallRecordingRequest:
    status: shared_call_recording_enum_status_enum.CallRecordingEnumStatusEnum = dataclasses.field(metadata={'form': { 'field_name': 'Status' }})
    pause_behavior: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'PauseBehavior' }})
    

@dataclasses.dataclass
class UpdateCallRecordingSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateCallRecordingRequest:
    path_params: UpdateCallRecordingPathParams = dataclasses.field()
    security: UpdateCallRecordingSecurity = dataclasses.field()
    request: Optional[UpdateCallRecordingUpdateCallRecordingRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateCallRecordingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_call_call_recording: Optional[shared_api_v2010_account_call_call_recording.APIV2010AccountCallCallRecording] = dataclasses.field(default=None)
    
