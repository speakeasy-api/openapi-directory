import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import buyer as shared_buyer


@dataclass_json
@dataclasses.dataclass
class ListBuyersResponse:
    r"""ListBuyersResponse
    A response containing buyer account information.
    """
    
    buyers: Optional[list[shared_buyer.Buyer]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyers') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
