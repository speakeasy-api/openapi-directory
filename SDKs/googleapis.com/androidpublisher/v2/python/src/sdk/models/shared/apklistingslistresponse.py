import dataclasses
from typing import Optional
from ..shared import apklisting as shared_apklisting


@dataclasses.dataclass
class ApkListingsListResponse:
    kind: Optional[str] = dataclasses.field(default=None)
    listings: Optional[list[shared_apklisting.ApkListing]] = dataclasses.field(default=None)
    
