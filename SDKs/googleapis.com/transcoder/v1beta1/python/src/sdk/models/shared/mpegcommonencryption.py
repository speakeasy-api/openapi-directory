import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class MpegCommonEncryption:
    r"""MpegCommonEncryption
    Configuration for MPEG Common Encryption (MPEG-CENC).
    """
    
    key_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyId') }})
    scheme: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheme') }})
    
