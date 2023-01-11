import dataclasses
from typing import Optional
from ..shared import assessmentgroupresponse as shared_assessmentgroupresponse
from ..shared import error as shared_error


@dataclasses.dataclass
class GetOfferingsOfferingIDGroupsPathParams:
    offering_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOfferingsOfferingIDGroupsRequest:
    path_params: GetOfferingsOfferingIDGroupsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOfferingsOfferingIDGroupsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    assessment_group_responses: Optional[list[shared_assessmentgroupresponse.AssessmentGroupResponse]] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
