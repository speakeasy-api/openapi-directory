import dataclasses
from typing import Optional
from ..shared import activityattemptopenresponse as shared_activityattemptopenresponse
from ..shared import error as shared_error


@dataclasses.dataclass
class GetOfferingsOfferingIDAnalyticsActivitiesResponsesPathParams:
    offering_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOfferingsOfferingIDAnalyticsActivitiesResponsesRequest:
    path_params: GetOfferingsOfferingIDAnalyticsActivitiesResponsesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOfferingsOfferingIDAnalyticsActivitiesResponsesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    activity_attempt_open_responses: Optional[list[shared_activityattemptopenresponse.ActivityAttemptOpenResponse]] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
