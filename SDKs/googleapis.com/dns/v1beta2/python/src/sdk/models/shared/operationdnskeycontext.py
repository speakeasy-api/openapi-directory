import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dnskey as shared_dnskey


@dataclass_json
@dataclasses.dataclass
class OperationDNSKeyContext:
    new_value: Optional[shared_dnskey.DNSKey] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newValue') }})
    old_value: Optional[shared_dnskey.DNSKey] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oldValue') }})
    
