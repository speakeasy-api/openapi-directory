import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dnskeydigest as shared_dnskeydigest

class DNSKeyAlgorithmEnum(str, Enum):
    RSASHA1 = "rsasha1"
    RSASHA256 = "rsasha256"
    RSASHA512 = "rsasha512"
    ECDSAP256SHA256 = "ecdsap256sha256"
    ECDSAP384SHA384 = "ecdsap384sha384"

class DNSKeyTypeEnum(str, Enum):
    KEY_SIGNING = "keySigning"
    ZONE_SIGNING = "zoneSigning"


@dataclass_json
@dataclasses.dataclass
class DNSKey:
    r"""DNSKey
    A DNSSEC key pair.
    """
    
    algorithm: Optional[DNSKeyAlgorithmEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('algorithm') }})
    creation_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTime') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    digests: Optional[list[shared_dnskeydigest.DNSKeyDigest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('digests') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isActive') }})
    key_length: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyLength') }})
    key_tag: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyTag') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    public_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicKey') }})
    type: Optional[DNSKeyTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
