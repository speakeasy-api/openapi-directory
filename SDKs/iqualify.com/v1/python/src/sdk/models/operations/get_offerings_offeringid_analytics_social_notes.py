import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import socialnotesresponse as shared_socialnotesresponse


@dataclasses.dataclass
class GetOfferingsOfferingIDAnalyticsSocialNotesPathParams:
    offering_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOfferingsOfferingIDAnalyticsSocialNotesRequest:
    path_params: GetOfferingsOfferingIDAnalyticsSocialNotesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOfferingsOfferingIDAnalyticsSocialNotesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    social_notes_responses: Optional[list[shared_socialnotesresponse.SocialNotesResponse]] = dataclasses.field(default=None)
    
