import dataclasses
from typing import Optional
from ..shared import offering as shared_offering
from ..shared import error as shared_error
from ..shared import offeringmetadataresponse as shared_offeringmetadataresponse


@dataclasses.dataclass
class PatchOfferingsOfferingIDPathParams:
    offering_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchOfferingsOfferingIDRequest:
    path_params: PatchOfferingsOfferingIDPathParams = dataclasses.field()
    request: shared_offering.Offering = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PatchOfferingsOfferingIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    offering_metadata_response: Optional[shared_offeringmetadataresponse.OfferingMetadataResponse] = dataclasses.field(default=None)
    
