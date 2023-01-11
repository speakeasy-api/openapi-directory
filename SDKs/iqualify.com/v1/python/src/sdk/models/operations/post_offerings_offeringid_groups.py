import dataclasses
from typing import Optional
from ..shared import assessmentgrouprequired as shared_assessmentgrouprequired
from ..shared import assessmentgroupresponse as shared_assessmentgroupresponse
from ..shared import error as shared_error


@dataclasses.dataclass
class PostOfferingsOfferingIDGroupsPathParams:
    offering_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostOfferingsOfferingIDGroupsRequest:
    path_params: PostOfferingsOfferingIDGroupsPathParams = dataclasses.field()
    request: shared_assessmentgrouprequired.AssessmentGroupRequired = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostOfferingsOfferingIDGroupsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    assessment_group_response: Optional[shared_assessmentgroupresponse.AssessmentGroupResponse] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
