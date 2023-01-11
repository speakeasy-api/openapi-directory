import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import unitreactionsanalyticsresponse as shared_unitreactionsanalyticsresponse


@dataclasses.dataclass
class GetOfferingsOfferingIDAnalyticsUnitReactionsPathParams:
    offering_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOfferingsOfferingIDAnalyticsUnitReactionsRequest:
    path_params: GetOfferingsOfferingIDAnalyticsUnitReactionsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOfferingsOfferingIDAnalyticsUnitReactionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    unit_reactions_analytics_responses: Optional[list[shared_unitreactionsanalyticsresponse.UnitReactionsAnalyticsResponse]] = dataclasses.field(default=None)
    
