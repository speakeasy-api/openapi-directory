import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DNSKeySpecAlgorithmEnum(str, Enum):
    RSASHA1 = "rsasha1"
    RSASHA256 = "rsasha256"
    RSASHA512 = "rsasha512"
    ECDSAP256SHA256 = "ecdsap256sha256"
    ECDSAP384SHA384 = "ecdsap384sha384"

class DNSKeySpecKeyTypeEnum(str, Enum):
    KEY_SIGNING = "keySigning"
    ZONE_SIGNING = "zoneSigning"


@dataclass_json
@dataclasses.dataclass
class DNSKeySpec:
    r"""DNSKeySpec
    Parameters for DnsKey key generation. Used for generating initial keys for a new ManagedZone and as default when adding a new DnsKey.
    """
    
    algorithm: Optional[DNSKeySpecAlgorithmEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('algorithm') }})
    key_length: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyLength') }})
    key_type: Optional[DNSKeySpecKeyTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyType') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
