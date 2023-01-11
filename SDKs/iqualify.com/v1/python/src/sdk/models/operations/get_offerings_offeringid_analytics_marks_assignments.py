import dataclasses
from typing import Optional
from ..shared import assignmentmarkresponse as shared_assignmentmarkresponse
from ..shared import error as shared_error


@dataclasses.dataclass
class GetOfferingsOfferingIDAnalyticsMarksAssignmentsPathParams:
    offering_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOfferingsOfferingIDAnalyticsMarksAssignmentsRequest:
    path_params: GetOfferingsOfferingIDAnalyticsMarksAssignmentsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOfferingsOfferingIDAnalyticsMarksAssignmentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    assignment_mark_responses: Optional[list[shared_assignmentmarkresponse.AssignmentMarkResponse]] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
