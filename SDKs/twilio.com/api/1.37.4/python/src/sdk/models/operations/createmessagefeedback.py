import dataclasses
from typing import Optional
from enum import Enum
from ..shared import message_feedback_enum_outcome_enum as shared_message_feedback_enum_outcome_enum
from ..shared import security as shared_security
from ..shared import api_v2010_account_message_message_feedback as shared_api_v2010_account_message_message_feedback


CREATE_MESSAGE_FEEDBACK_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class CreateMessageFeedbackPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    message_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'MessageSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateMessageFeedbackCreateMessageFeedbackRequest:
    outcome: Optional[shared_message_feedback_enum_outcome_enum.MessageFeedbackEnumOutcomeEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Outcome' }})
    

@dataclasses.dataclass
class CreateMessageFeedbackSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateMessageFeedbackRequest:
    path_params: CreateMessageFeedbackPathParams = dataclasses.field()
    security: CreateMessageFeedbackSecurity = dataclasses.field()
    request: Optional[CreateMessageFeedbackCreateMessageFeedbackRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateMessageFeedbackResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_message_message_feedback: Optional[shared_api_v2010_account_message_message_feedback.APIV2010AccountMessageMessageFeedback] = dataclasses.field(default=None)
    
