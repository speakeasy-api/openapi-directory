import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import publisheraccount as shared_publisheraccount


@dataclass_json
@dataclasses.dataclass
class ListPublisherAccountsResponse:
    r"""ListPublisherAccountsResponse
    Response for the publisher account list request.
    """
    
    account: Optional[list[shared_publisheraccount.PublisherAccount]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
