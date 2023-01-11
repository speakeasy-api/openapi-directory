import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import call_feedback_enum_issues_enum as shared_call_feedback_enum_issues_enum
from ..shared import security as shared_security
from ..shared import api_v2010_account_call_call_feedback as shared_api_v2010_account_call_call_feedback


UPDATE_CALL_FEEDBACK_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class UpdateCallFeedbackPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    call_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateCallFeedbackUpdateCallFeedbackRequest:
    issue: Optional[list[shared_call_feedback_enum_issues_enum.CallFeedbackEnumIssuesEnum]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Issue' }})
    quality_score: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'QualityScore' }})
    

@dataclasses.dataclass
class UpdateCallFeedbackSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateCallFeedbackRequest:
    path_params: UpdateCallFeedbackPathParams = dataclasses.field()
    security: UpdateCallFeedbackSecurity = dataclasses.field()
    request: Optional[UpdateCallFeedbackUpdateCallFeedbackRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateCallFeedbackResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_call_call_feedback: Optional[shared_api_v2010_account_call_call_feedback.APIV2010AccountCallCallFeedback] = dataclasses.field(default=None)
    
