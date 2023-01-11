import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import api_v2010_account_call_call_feedback_summary as shared_api_v2010_account_call_call_feedback_summary


CREATE_CALL_FEEDBACK_SUMMARY_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class CreateCallFeedbackSummaryPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    
class CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequestStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclasses.dataclass
class CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequest:
    end_date: date = dataclasses.field(metadata={'form': { 'field_name': 'EndDate' }})
    start_date: date = dataclasses.field(metadata={'form': { 'field_name': 'StartDate' }})
    include_subaccounts: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'IncludeSubaccounts' }})
    status_callback: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    status_callback_method: Optional[CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequestStatusCallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StatusCallbackMethod' }})
    

@dataclasses.dataclass
class CreateCallFeedbackSummarySecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateCallFeedbackSummaryRequest:
    path_params: CreateCallFeedbackSummaryPathParams = dataclasses.field()
    security: CreateCallFeedbackSummarySecurity = dataclasses.field()
    request: Optional[CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateCallFeedbackSummaryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_call_call_feedback_summary: Optional[shared_api_v2010_account_call_call_feedback_summary.APIV2010AccountCallCallFeedbackSummary] = dataclasses.field(default=None)
    
