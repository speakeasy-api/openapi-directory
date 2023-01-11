import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dnspeering as shared_dnspeering


@dataclass_json
@dataclasses.dataclass
class ListDNSPeeringsResponse:
    r"""ListDNSPeeringsResponse
    Response message for list DNS peerings.
    """
    
    dns_peerings: Optional[list[shared_dnspeering.DNSPeering]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnsPeerings') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
