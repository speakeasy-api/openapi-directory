import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_PARTICIPANT_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class DeleteParticipantPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    call_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    conference_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ConferenceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteParticipantSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteParticipantRequest:
    path_params: DeleteParticipantPathParams = dataclasses.field()
    security: DeleteParticipantSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteParticipantResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
