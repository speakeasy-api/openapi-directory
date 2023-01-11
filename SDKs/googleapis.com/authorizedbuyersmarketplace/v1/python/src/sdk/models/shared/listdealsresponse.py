import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deal as shared_deal


@dataclass_json
@dataclasses.dataclass
class ListDealsResponse:
    r"""ListDealsResponse
    Response message for listing deals in a proposal.
    """
    
    deals: Optional[list[shared_deal.Deal]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deals') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
