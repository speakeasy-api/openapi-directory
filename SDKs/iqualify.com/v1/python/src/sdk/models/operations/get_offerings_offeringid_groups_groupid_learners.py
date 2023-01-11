import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import userresponse as shared_userresponse


@dataclasses.dataclass
class GetOfferingsOfferingIDGroupsGroupIDLearnersPathParams:
    group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    offering_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOfferingsOfferingIDGroupsGroupIDLearnersRequest:
    path_params: GetOfferingsOfferingIDGroupsGroupIDLearnersPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOfferingsOfferingIDGroupsGroupIDLearnersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    user_responses: Optional[list[shared_userresponse.UserResponse]] = dataclasses.field(default=None)
    
