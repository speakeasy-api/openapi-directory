import dataclasses
from typing import Optional
from ..shared import assessmentpendingsubmission as shared_assessmentpendingsubmission
from ..shared import error as shared_error


@dataclasses.dataclass
class GetOfferingsOfferingIDLearnersPendingSubmissionPathParams:
    offering_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOfferingsOfferingIDLearnersPendingSubmissionQueryParams:
    days: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'days', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetOfferingsOfferingIDLearnersPendingSubmissionRequest:
    path_params: GetOfferingsOfferingIDLearnersPendingSubmissionPathParams = dataclasses.field()
    query_params: GetOfferingsOfferingIDLearnersPendingSubmissionQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOfferingsOfferingIDLearnersPendingSubmissionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    assessment_pending_submissions: Optional[list[shared_assessmentpendingsubmission.AssessmentPendingSubmission]] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
