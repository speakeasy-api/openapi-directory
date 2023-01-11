import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import offeringuser as shared_offeringuser


@dataclasses.dataclass
class GetOfferingsOfferingIDUsersMarkerEmailMarksPathParams:
    marker_email: str = dataclasses.field(metadata={'path_param': { 'field_name': 'markerEmail', 'style': 'simple', 'explode': False }})
    offering_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOfferingsOfferingIDUsersMarkerEmailMarksRequest:
    path_params: GetOfferingsOfferingIDUsersMarkerEmailMarksPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOfferingsOfferingIDUsersMarkerEmailMarksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    offering_users: Optional[list[shared_offeringuser.OfferingUser]] = dataclasses.field(default=None)
    
