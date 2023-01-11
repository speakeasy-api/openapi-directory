import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import orgpolicy as shared_orgpolicy


@dataclass_json
@dataclasses.dataclass
class ListOrgPoliciesResponse:
    r"""ListOrgPoliciesResponse
    The response returned from the `ListOrgPolicies` method. It will be empty if no `Policies` are set on the resource.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    policies: Optional[list[shared_orgpolicy.OrgPolicy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policies') }})
    
