import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import error as shared_error
from ..shared import userresponse as shared_userresponse


@dataclasses.dataclass
class PostOfferingsOfferingIDGroupsGroupIDLearnersPathParams:
    group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    offering_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PostOfferingsOfferingIDGroupsGroupIDLearnersRequestBody:
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    

@dataclasses.dataclass
class PostOfferingsOfferingIDGroupsGroupIDLearnersRequest:
    path_params: PostOfferingsOfferingIDGroupsGroupIDLearnersPathParams = dataclasses.field()
    request: PostOfferingsOfferingIDGroupsGroupIDLearnersRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostOfferingsOfferingIDGroupsGroupIDLearnersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    user_response: Optional[shared_userresponse.UserResponse] = dataclasses.field(default=None)
    
