import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import error as shared_error


@dataclasses.dataclass
class GetUsersUserEmailOfferingsOfferingIDProgressPathParams:
    offering_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    user_email: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userEmail', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetUsersUserEmailOfferingsOfferingIDProgress200ApplicationJSON:
    completion: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completion') }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    first_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstName') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastName') }})
    

@dataclasses.dataclass
class GetUsersUserEmailOfferingsOfferingIDProgressRequest:
    path_params: GetUsersUserEmailOfferingsOfferingIDProgressPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUsersUserEmailOfferingsOfferingIDProgressResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    get_users_user_email_offerings_offering_id_progress_200_application_json_object: Optional[GetUsersUserEmailOfferingsOfferingIDProgress200ApplicationJSON] = dataclasses.field(default=None)
    
