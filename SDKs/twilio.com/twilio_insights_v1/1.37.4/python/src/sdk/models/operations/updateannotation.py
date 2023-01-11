import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import annotation_enum_answered_by_enum as shared_annotation_enum_answered_by_enum
from ..shared import annotation_enum_connectivity_issue_enum as shared_annotation_enum_connectivity_issue_enum
from ..shared import security as shared_security
from ..shared import insights_v1_call_annotation as shared_insights_v1_call_annotation


UPDATE_ANNOTATION_SERVERS = [
	"https://insights.twilio.com",
]


@dataclasses.dataclass
class UpdateAnnotationPathParams:
    call_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateAnnotationUpdateAnnotationRequest:
    answered_by: Optional[shared_annotation_enum_answered_by_enum.AnnotationEnumAnsweredByEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AnsweredBy' }})
    call_score: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CallScore' }})
    comment: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Comment' }})
    connectivity_issue: Optional[shared_annotation_enum_connectivity_issue_enum.AnnotationEnumConnectivityIssueEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ConnectivityIssue' }})
    incident: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Incident' }})
    quality_issues: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'QualityIssues' }})
    spam: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Spam' }})
    

@dataclasses.dataclass
class UpdateAnnotationSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateAnnotationRequest:
    path_params: UpdateAnnotationPathParams = dataclasses.field()
    security: UpdateAnnotationSecurity = dataclasses.field()
    request: Optional[UpdateAnnotationUpdateAnnotationRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateAnnotationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    insights_v1_call_annotation: Optional[shared_insights_v1_call_annotation.InsightsV1CallAnnotation] = dataclasses.field(default=None)
    
