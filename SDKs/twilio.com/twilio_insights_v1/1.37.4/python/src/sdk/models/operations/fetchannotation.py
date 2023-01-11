import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import insights_v1_call_annotation as shared_insights_v1_call_annotation


FETCH_ANNOTATION_SERVERS = [
	"https://insights.twilio.com",
]


@dataclasses.dataclass
class FetchAnnotationPathParams:
    call_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchAnnotationSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchAnnotationRequest:
    path_params: FetchAnnotationPathParams = dataclasses.field()
    security: FetchAnnotationSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchAnnotationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    insights_v1_call_annotation: Optional[shared_insights_v1_call_annotation.InsightsV1CallAnnotation] = dataclasses.field(default=None)
    
