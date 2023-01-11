import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import error as shared_error
from ..shared import offeringmetadataresponse as shared_offeringmetadataresponse


@dataclasses.dataclass
class PutOfferingsOfferingIDMetadataTopicPathParams:
    offering_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PutOfferingsOfferingIDMetadataTopicRequestBody:
    topic: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    

@dataclasses.dataclass
class PutOfferingsOfferingIDMetadataTopicRequest:
    path_params: PutOfferingsOfferingIDMetadataTopicPathParams = dataclasses.field()
    request: PutOfferingsOfferingIDMetadataTopicRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutOfferingsOfferingIDMetadataTopicResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    offering_metadata_response: Optional[shared_offeringmetadataresponse.OfferingMetadataResponse] = dataclasses.field(default=None)
    
