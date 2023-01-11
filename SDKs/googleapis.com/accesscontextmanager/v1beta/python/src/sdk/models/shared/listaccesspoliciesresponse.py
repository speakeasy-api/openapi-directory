import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accesspolicy as shared_accesspolicy


@dataclass_json
@dataclasses.dataclass
class ListAccessPoliciesResponse:
    r"""ListAccessPoliciesResponse
    A response to `ListAccessPoliciesRequest`.
    """
    
    access_policies: Optional[list[shared_accesspolicy.AccessPolicy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessPolicies') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
