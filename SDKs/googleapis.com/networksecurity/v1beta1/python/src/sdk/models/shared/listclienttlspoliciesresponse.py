import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import clienttlspolicy as shared_clienttlspolicy


@dataclass_json
@dataclasses.dataclass
class ListClientTLSPoliciesResponse:
    r"""ListClientTLSPoliciesResponse
    Response returned by the ListClientTlsPolicies method.
    """
    
    client_tls_policies: Optional[list[shared_clienttlspolicy.ClientTLSPolicy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientTlsPolicies') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
