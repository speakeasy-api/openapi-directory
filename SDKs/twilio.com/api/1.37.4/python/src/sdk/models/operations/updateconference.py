import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import conference_enum_update_status_enum as shared_conference_enum_update_status_enum
from ..shared import security as shared_security
from ..shared import api_v2010_account_conference as shared_api_v2010_account_conference


UPDATE_CONFERENCE_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class UpdateConferencePathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    
class UpdateConferenceUpdateConferenceRequestAnnounceMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclasses.dataclass
class UpdateConferenceUpdateConferenceRequest:
    announce_method: Optional[UpdateConferenceUpdateConferenceRequestAnnounceMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AnnounceMethod' }})
    announce_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AnnounceUrl' }})
    status: Optional[shared_conference_enum_update_status_enum.ConferenceEnumUpdateStatusEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Status' }})
    

@dataclasses.dataclass
class UpdateConferenceSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateConferenceRequest:
    path_params: UpdateConferencePathParams = dataclasses.field()
    security: UpdateConferenceSecurity = dataclasses.field()
    request: Optional[UpdateConferenceUpdateConferenceRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateConferenceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_conference: Optional[shared_api_v2010_account_conference.APIV2010AccountConference] = dataclasses.field(default=None)
    
