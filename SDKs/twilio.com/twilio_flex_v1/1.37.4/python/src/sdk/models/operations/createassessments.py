import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import flex_v1_assessments as shared_flex_v1_assessments


CREATE_ASSESSMENTS_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclasses.dataclass
class CreateAssessmentsSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateAssessmentsRequest:
    security: CreateAssessmentsSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateAssessmentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flex_v1_assessments: Optional[shared_flex_v1_assessments.FlexV1Assessments] = dataclasses.field(default=None)
    
