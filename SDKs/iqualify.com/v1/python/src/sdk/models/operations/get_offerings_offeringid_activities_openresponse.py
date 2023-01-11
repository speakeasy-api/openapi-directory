import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import offeringactivitiesresponse as shared_offeringactivitiesresponse


@dataclasses.dataclass
class GetOfferingsOfferingIDActivitiesOpenresponsePathParams:
    offering_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOfferingsOfferingIDActivitiesOpenresponseRequest:
    path_params: GetOfferingsOfferingIDActivitiesOpenresponsePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOfferingsOfferingIDActivitiesOpenresponseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    offering_activities_responses: Optional[list[shared_offeringactivitiesresponse.OfferingActivitiesResponse]] = dataclasses.field(default=None)
    
