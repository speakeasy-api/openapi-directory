import dataclasses
from typing import Optional
from ..shared import error as shared_error


@dataclasses.dataclass
class DeleteOfferingsOfferingIDUsersUserEmailPathParams:
    offering_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    user_email: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userEmail', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteOfferingsOfferingIDUsersUserEmailRequest:
    path_params: DeleteOfferingsOfferingIDUsersUserEmailPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteOfferingsOfferingIDUsersUserEmailResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
