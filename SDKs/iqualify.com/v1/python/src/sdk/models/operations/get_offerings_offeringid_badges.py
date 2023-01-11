import dataclasses
from typing import Optional
from ..shared import badge as shared_badge
from ..shared import error as shared_error


@dataclasses.dataclass
class GetOfferingsOfferingIDBadgesPathParams:
    offering_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOfferingsOfferingIDBadgesRequest:
    path_params: GetOfferingsOfferingIDBadgesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOfferingsOfferingIDBadgesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    badge: Optional[shared_badge.Badge] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
