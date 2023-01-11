import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import servertlspolicy as shared_servertlspolicy


@dataclass_json
@dataclasses.dataclass
class ListServerTLSPoliciesResponse:
    r"""ListServerTLSPoliciesResponse
    Response returned by the ListServerTlsPolicies method.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    server_tls_policies: Optional[list[shared_servertlspolicy.ServerTLSPolicy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverTlsPolicies') }})
    
