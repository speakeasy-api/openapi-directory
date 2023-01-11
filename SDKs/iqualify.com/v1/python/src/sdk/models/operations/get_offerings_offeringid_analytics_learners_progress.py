import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import learnerprogressresponse as shared_learnerprogressresponse


@dataclasses.dataclass
class GetOfferingsOfferingIDAnalyticsLearnersProgressPathParams:
    offering_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOfferingsOfferingIDAnalyticsLearnersProgressRequest:
    path_params: GetOfferingsOfferingIDAnalyticsLearnersProgressPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOfferingsOfferingIDAnalyticsLearnersProgressResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    learner_progress_responses: Optional[list[shared_learnerprogressresponse.LearnerProgressResponse]] = dataclasses.field(default=None)
    
