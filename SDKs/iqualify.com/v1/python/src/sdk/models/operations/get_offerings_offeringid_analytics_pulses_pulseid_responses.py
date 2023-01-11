import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import pulseresponse as shared_pulseresponse


@dataclasses.dataclass
class GetOfferingsOfferingIDAnalyticsPulsesPulseIDResponsesPathParams:
    offering_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    pulse_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'pulseId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOfferingsOfferingIDAnalyticsPulsesPulseIDResponsesRequest:
    path_params: GetOfferingsOfferingIDAnalyticsPulsesPulseIDResponsesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOfferingsOfferingIDAnalyticsPulsesPulseIDResponsesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    pulse_responses: Optional[list[shared_pulseresponse.PulseResponse]] = dataclasses.field(default=None)
    
