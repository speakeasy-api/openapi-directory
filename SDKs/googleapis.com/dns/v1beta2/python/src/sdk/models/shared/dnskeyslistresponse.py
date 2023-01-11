import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dnskey as shared_dnskey
from ..shared import responseheader as shared_responseheader


@dataclass_json
@dataclasses.dataclass
class DNSKeysListResponse:
    r"""DNSKeysListResponse
    The response to a request to enumerate DnsKeys in a ManagedZone.
    """
    
    dns_keys: Optional[list[shared_dnskey.DNSKey]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnsKeys') }})
    header: Optional[shared_responseheader.ResponseHeader] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('header') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
