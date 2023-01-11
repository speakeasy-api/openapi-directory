import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import recording_enum_recording_mode_enum as shared_recording_enum_recording_mode_enum
from ..shared import recording_enum_recording_trim_enum as shared_recording_enum_recording_trim_enum
from ..shared import security as shared_security
from ..shared import trunking_v1_trunk_recording as shared_trunking_v1_trunk_recording


UPDATE_RECORDING_SERVERS = [
	"https://trunking.twilio.com",
]


@dataclasses.dataclass
class UpdateRecordingPathParams:
    trunk_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'TrunkSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateRecordingUpdateRecordingRequest:
    mode: Optional[shared_recording_enum_recording_mode_enum.RecordingEnumRecordingModeEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Mode' }})
    trim: Optional[shared_recording_enum_recording_trim_enum.RecordingEnumRecordingTrimEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Trim' }})
    

@dataclasses.dataclass
class UpdateRecordingSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateRecordingRequest:
    path_params: UpdateRecordingPathParams = dataclasses.field()
    security: UpdateRecordingSecurity = dataclasses.field()
    request: Optional[UpdateRecordingUpdateRecordingRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateRecordingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    trunking_v1_trunk_recording: Optional[shared_trunking_v1_trunk_recording.TrunkingV1TrunkRecording] = dataclasses.field(default=None)
    
