import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import share as shared_share


@dataclass_json
@dataclasses.dataclass
class ListSharesResponse:
    r"""ListSharesResponse
    ListSharesResponse is the result of ListSharesRequest.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    shares: Optional[list[shared_share.Share]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shares') }})
    unreachable: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
