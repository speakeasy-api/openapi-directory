import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import serviceaccount as shared_serviceaccount


@dataclass_json
@dataclasses.dataclass
class ListServiceAccountsResponse:
    r"""ListServiceAccountsResponse
    The service account list response.
    """
    
    accounts: Optional[list[shared_serviceaccount.ServiceAccount]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accounts') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
