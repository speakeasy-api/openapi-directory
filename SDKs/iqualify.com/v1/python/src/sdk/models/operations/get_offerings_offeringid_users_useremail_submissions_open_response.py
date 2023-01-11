import dataclasses
from typing import Optional
from ..shared import assignments as shared_assignments
from ..shared import error as shared_error


@dataclasses.dataclass
class GetOfferingsOfferingIDUsersUserEmailSubmissionsOpenResponsePathParams:
    offering_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    user_email: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userEmail', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOfferingsOfferingIDUsersUserEmailSubmissionsOpenResponseRequest:
    path_params: GetOfferingsOfferingIDUsersUserEmailSubmissionsOpenResponsePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOfferingsOfferingIDUsersUserEmailSubmissionsOpenResponseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    assignments: Optional[list[shared_assignments.Assignments]] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
