import dataclasses
from typing import Optional
from ..shared import assignmentmarkresponse as shared_assignmentmarkresponse
from ..shared import error as shared_error


@dataclasses.dataclass
class GetOfferingsOfferingIDAnalyticsSubmissionsAssignmentsPathParams:
    offering_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOfferingsOfferingIDAnalyticsSubmissionsAssignmentsRequest:
    path_params: GetOfferingsOfferingIDAnalyticsSubmissionsAssignmentsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOfferingsOfferingIDAnalyticsSubmissionsAssignmentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    assignment_mark_responses: Optional[list[shared_assignmentmarkresponse.AssignmentMarkResponse]] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
