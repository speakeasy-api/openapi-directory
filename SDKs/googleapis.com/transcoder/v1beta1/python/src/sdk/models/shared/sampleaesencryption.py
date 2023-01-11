import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SampleAesEncryption:
    r"""SampleAesEncryption
    Configuration for SAMPLE-AES encryption.
    """
    
    key_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyUri') }})
    
