import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DNSKeyDigestTypeEnum(str, Enum):
    SHA1 = "SHA1"
    SHA256 = "SHA256"
    SHA384 = "SHA384"


@dataclass_json
@dataclasses.dataclass
class DNSKeyDigest:
    digest: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('digest') }})
    type: Optional[DNSKeyDigestTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
