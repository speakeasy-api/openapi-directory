from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_CALL_FEEDBACK_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class UpdateCallFeedbackPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    call_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateCallFeedbackSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateCallFeedbackRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateCallFeedbackPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateCallFeedbackSecurity = field(default=None)
    

@dataclass
class UpdateCallFeedbackResponses:
    api_v2010_account_call_call_feedback: Optional[shared.APIV2010AccountCallCallFeedback] = field(default=None)
    

@dataclass
class UpdateCallFeedbackResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateCallFeedbackResponses]] = field(default=None)
    status_code: int = field(default=None)
    
