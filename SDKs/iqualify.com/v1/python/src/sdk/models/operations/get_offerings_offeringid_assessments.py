import dataclasses
from typing import Optional
from ..shared import assessmentresponse as shared_assessmentresponse
from ..shared import error as shared_error


@dataclasses.dataclass
class GetOfferingsOfferingIDAssessmentsPathParams:
    offering_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOfferingsOfferingIDAssessmentsRequest:
    path_params: GetOfferingsOfferingIDAssessmentsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOfferingsOfferingIDAssessmentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    assessment_responses: Optional[list[shared_assessmentresponse.AssessmentResponse]] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
