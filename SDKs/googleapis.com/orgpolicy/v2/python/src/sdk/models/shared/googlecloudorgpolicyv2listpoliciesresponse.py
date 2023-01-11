import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudorgpolicyv2policy as shared_googlecloudorgpolicyv2policy


@dataclass_json
@dataclasses.dataclass
class GoogleCloudOrgpolicyV2ListPoliciesResponse:
    r"""GoogleCloudOrgpolicyV2ListPoliciesResponse
    The response returned from the ListPolicies method. It will be empty if no `Policies` are set on the resource.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    policies: Optional[list[shared_googlecloudorgpolicyv2policy.GoogleCloudOrgpolicyV2Policy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policies') }})
    
