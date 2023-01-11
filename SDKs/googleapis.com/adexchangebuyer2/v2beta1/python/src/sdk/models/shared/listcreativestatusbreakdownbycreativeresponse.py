import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import filteredbidcreativerow as shared_filteredbidcreativerow


@dataclass_json
@dataclasses.dataclass
class ListCreativeStatusBreakdownByCreativeResponse:
    r"""ListCreativeStatusBreakdownByCreativeResponse
    Response message for listing all creatives associated with a given filtered bid reason.
    """
    
    filtered_bid_creative_rows: Optional[list[shared_filteredbidcreativerow.FilteredBidCreativeRow]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filteredBidCreativeRows') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
