import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import finalizeddeal as shared_finalizeddeal


@dataclass_json
@dataclasses.dataclass
class ListFinalizedDealsResponse:
    r"""ListFinalizedDealsResponse
    Response message for listing finalized deals.
    """
    
    finalized_deals: Optional[list[shared_finalizeddeal.FinalizedDeal]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finalizedDeals') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
