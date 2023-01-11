import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import listing as shared_listing


@dataclass_json
@dataclasses.dataclass
class ListingsListResponse:
    r"""ListingsListResponse
    Response listing all localized listings.
    """
    
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    listings: Optional[list[shared_listing.Listing]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listings') }})
    
