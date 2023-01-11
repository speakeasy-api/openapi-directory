import dataclasses
from typing import Optional
from ..shared import error as shared_error


@dataclasses.dataclass
class DeleteOfferingsOfferingIDGroupsGroupIDLearnersUserEmailPathParams:
    group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    offering_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    user_email: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userEmail', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteOfferingsOfferingIDGroupsGroupIDLearnersUserEmailRequest:
    path_params: DeleteOfferingsOfferingIDGroupsGroupIDLearnersUserEmailPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteOfferingsOfferingIDGroupsGroupIDLearnersUserEmailResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
