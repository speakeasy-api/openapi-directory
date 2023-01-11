import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import offeringuser as shared_offeringuser


@dataclasses.dataclass
class PostOfferingsOfferingIDUsersMarkerEmailMarksPathParams:
    marker_email: str = dataclasses.field(metadata={'path_param': { 'field_name': 'markerEmail', 'style': 'simple', 'explode': False }})
    offering_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostOfferingsOfferingIDUsersMarkerEmailMarksRequest:
    path_params: PostOfferingsOfferingIDUsersMarkerEmailMarksPathParams = dataclasses.field()
    request: list[str] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostOfferingsOfferingIDUsersMarkerEmailMarksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    offering_users: Optional[list[shared_offeringuser.OfferingUser]] = dataclasses.field(default=None)
    
