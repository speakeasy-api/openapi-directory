import dataclasses
from typing import Any,Optional
from ..shared import offeringuser as shared_offeringuser
from ..shared import error as shared_error
from ..shared import offeringuseraddresponse as shared_offeringuseraddresponse


@dataclasses.dataclass
class PostOfferingsOfferingIDUsersPathParams:
    offering_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostOfferingsOfferingIDUsersRequest:
    path_params: PostOfferingsOfferingIDUsersPathParams = dataclasses.field()
    request: list[shared_offeringuser.OfferingUser] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostOfferingsOfferingIDUsersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    offering_user_add_responses: Optional[list[shared_offeringuseraddresponse.OfferingUserAddResponse]] = dataclasses.field(default=None)
    post_offerings_offering_id_users_207_application_json_oneoves: Optional[list[Any]] = dataclasses.field(default=None)
    
