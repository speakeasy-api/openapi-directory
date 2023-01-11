import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import creativestatusrow as shared_creativestatusrow


@dataclass_json
@dataclasses.dataclass
class ListLosingBidsResponse:
    r"""ListLosingBidsResponse
    Response message for listing all reasons that bids lost in the auction.
    """
    
    creative_status_rows: Optional[list[shared_creativestatusrow.CreativeStatusRow]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeStatusRows') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
