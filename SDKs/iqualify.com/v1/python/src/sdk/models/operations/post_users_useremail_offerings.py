import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import offeringmetadataresponse as shared_offeringmetadataresponse


@dataclasses.dataclass
class PostUsersUserEmailOfferingsPathParams:
    user_email: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userEmail', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostUsersUserEmailOfferingsRequest:
    path_params: PostUsersUserEmailOfferingsPathParams = dataclasses.field()
    request: list[str] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostUsersUserEmailOfferingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    offering_metadata_responses: Optional[list[shared_offeringmetadataresponse.OfferingMetadataResponse]] = dataclasses.field(default=None)
    
