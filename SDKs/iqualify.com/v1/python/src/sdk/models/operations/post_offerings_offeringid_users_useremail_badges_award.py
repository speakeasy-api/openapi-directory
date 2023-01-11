import dataclasses
from typing import Optional
from ..shared import awardedresponse as shared_awardedresponse
from ..shared import error as shared_error


@dataclasses.dataclass
class PostOfferingsOfferingIDUsersUserEmailBadgesAwardPathParams:
    offering_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    user_email: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userEmail', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostOfferingsOfferingIDUsersUserEmailBadgesAwardRequest:
    path_params: PostOfferingsOfferingIDUsersUserEmailBadgesAwardPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PostOfferingsOfferingIDUsersUserEmailBadgesAwardResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    awarded_response: Optional[shared_awardedresponse.AwardedResponse] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
