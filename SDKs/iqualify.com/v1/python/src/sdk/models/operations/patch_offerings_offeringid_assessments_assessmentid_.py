import dataclasses
from typing import Optional
from ..shared import assessment as shared_assessment
from ..shared import assessmentresponse as shared_assessmentresponse
from ..shared import error as shared_error


@dataclasses.dataclass
class PatchOfferingsOfferingIDAssessmentsAssessmentIDPathParams:
    assessment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'assessmentId', 'style': 'simple', 'explode': False }})
    offering_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchOfferingsOfferingIDAssessmentsAssessmentIDRequest:
    path_params: PatchOfferingsOfferingIDAssessmentsAssessmentIDPathParams = dataclasses.field()
    request: shared_assessment.Assessment = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PatchOfferingsOfferingIDAssessmentsAssessmentIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    assessment_response: Optional[shared_assessmentresponse.AssessmentResponse] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
