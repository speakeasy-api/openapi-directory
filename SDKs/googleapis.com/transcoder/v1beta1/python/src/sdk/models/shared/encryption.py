import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import aes128encryption as shared_aes128encryption
from ..shared import mpegcommonencryption as shared_mpegcommonencryption
from ..shared import sampleaesencryption as shared_sampleaesencryption


@dataclass_json
@dataclasses.dataclass
class Encryption:
    r"""Encryption
    Encryption settings.
    """
    
    aes128: Optional[shared_aes128encryption.Aes128Encryption] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aes128') }})
    iv: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iv') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    mpeg_cenc: Optional[shared_mpegcommonencryption.MpegCommonEncryption] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mpegCenc') }})
    sample_aes: Optional[shared_sampleaesencryption.SampleAesEncryption] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleAes') }})
    
