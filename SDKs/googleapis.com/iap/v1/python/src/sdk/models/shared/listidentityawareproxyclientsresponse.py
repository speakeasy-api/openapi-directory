import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import identityawareproxyclient as shared_identityawareproxyclient


@dataclass_json
@dataclasses.dataclass
class ListIdentityAwareProxyClientsResponse:
    r"""ListIdentityAwareProxyClientsResponse
    Response message for ListIdentityAwareProxyClients.
    """
    
    identity_aware_proxy_clients: Optional[list[shared_identityawareproxyclient.IdentityAwareProxyClient]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identityAwareProxyClients') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
