import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import offeringmetadataresponse as shared_offeringmetadataresponse


@dataclasses.dataclass
class GetOfferingsCurrentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    offering_metadata_responses: Optional[list[shared_offeringmetadataresponse.OfferingMetadataResponse]] = dataclasses.field(default=None)
    
