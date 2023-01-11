import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import api_v2010_account_conference_participant as shared_api_v2010_account_conference_participant


UPDATE_PARTICIPANT_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class UpdateParticipantPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    call_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    conference_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ConferenceSid', 'style': 'simple', 'explode': False }})
    
class UpdateParticipantUpdateParticipantRequestAnnounceMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateParticipantUpdateParticipantRequestHoldMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateParticipantUpdateParticipantRequestWaitMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclasses.dataclass
class UpdateParticipantUpdateParticipantRequest:
    announce_method: Optional[UpdateParticipantUpdateParticipantRequestAnnounceMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AnnounceMethod' }})
    announce_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AnnounceUrl' }})
    beep_on_exit: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'BeepOnExit' }})
    call_sid_to_coach: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CallSidToCoach' }})
    coaching: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Coaching' }})
    end_conference_on_exit: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'EndConferenceOnExit' }})
    hold: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Hold' }})
    hold_method: Optional[UpdateParticipantUpdateParticipantRequestHoldMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'HoldMethod' }})
    hold_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'HoldUrl' }})
    muted: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Muted' }})
    wait_method: Optional[UpdateParticipantUpdateParticipantRequestWaitMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'WaitMethod' }})
    wait_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'WaitUrl' }})
    

@dataclasses.dataclass
class UpdateParticipantSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateParticipantRequest:
    path_params: UpdateParticipantPathParams = dataclasses.field()
    security: UpdateParticipantSecurity = dataclasses.field()
    request: Optional[UpdateParticipantUpdateParticipantRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateParticipantResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_conference_participant: Optional[shared_api_v2010_account_conference_participant.APIV2010AccountConferenceParticipant] = dataclasses.field(default=None)
    
