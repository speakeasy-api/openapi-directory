import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PublicKeyFormatEnum(str, Enum):
    KEY_FORMAT_UNSPECIFIED = "KEY_FORMAT_UNSPECIFIED"
    PEM = "PEM"


@dataclass_json
@dataclasses.dataclass
class PublicKey:
    r"""PublicKey
    A PublicKey describes a public key.
    """
    
    format: Optional[PublicKeyFormatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    
