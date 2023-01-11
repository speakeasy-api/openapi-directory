import dataclasses
from typing import Optional
from ..shared import offeringrequired as shared_offeringrequired
from ..shared import error as shared_error
from ..shared import offeringmetadataresponse as shared_offeringmetadataresponse


@dataclasses.dataclass
class PostOfferingsRequest:
    request: shared_offeringrequired.OfferingRequired = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostOfferingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    offering_metadata_response: Optional[shared_offeringmetadataresponse.OfferingMetadataResponse] = dataclasses.field(default=None)
    
