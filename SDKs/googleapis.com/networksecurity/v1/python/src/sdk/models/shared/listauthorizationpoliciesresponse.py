import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import authorizationpolicy as shared_authorizationpolicy


@dataclass_json
@dataclasses.dataclass
class ListAuthorizationPoliciesResponse:
    r"""ListAuthorizationPoliciesResponse
    Response returned by the ListAuthorizationPolicies method.
    """
    
    authorization_policies: Optional[list[shared_authorizationpolicy.AuthorizationPolicy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizationPolicies') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
