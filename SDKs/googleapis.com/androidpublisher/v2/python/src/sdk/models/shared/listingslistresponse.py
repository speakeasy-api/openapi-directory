import dataclasses
from typing import Optional
from ..shared import listing as shared_listing


@dataclasses.dataclass
class ListingsListResponse:
    kind: Optional[str] = dataclasses.field(default=None)
    listings: Optional[list[shared_listing.Listing]] = dataclasses.field(default=None)
    
