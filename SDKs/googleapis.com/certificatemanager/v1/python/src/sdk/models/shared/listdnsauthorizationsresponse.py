import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dnsauthorization as shared_dnsauthorization


@dataclass_json
@dataclasses.dataclass
class ListDNSAuthorizationsResponse:
    r"""ListDNSAuthorizationsResponse
    Response for the `ListDnsAuthorizations` method.
    """
    
    dns_authorizations: Optional[list[shared_dnsauthorization.DNSAuthorization]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnsAuthorizations') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    unreachable: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
