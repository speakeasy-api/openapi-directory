import dataclasses
from typing import Any,Optional
from ..shared import error as shared_error


@dataclasses.dataclass
class GetOfferingsOfferingIDAnalyticsSubmissionsOpenResponseAssessmentIDPathParams:
    assessment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'assessmentId', 'style': 'simple', 'explode': False }})
    offering_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOfferingsOfferingIDAnalyticsSubmissionsOpenResponseAssessmentIDRequest:
    path_params: GetOfferingsOfferingIDAnalyticsSubmissionsOpenResponseAssessmentIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOfferingsOfferingIDAnalyticsSubmissionsOpenResponseAssessmentIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    submission_mark_responses: Optional[list[Any]] = dataclasses.field(default=None)
    
