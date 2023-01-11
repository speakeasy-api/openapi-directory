import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import bidder as shared_bidder


@dataclass_json
@dataclasses.dataclass
class ListBiddersResponse:
    r"""ListBiddersResponse
    A response containing bidders.
    """
    
    bidders: Optional[list[shared_bidder.Bidder]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bidders') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
