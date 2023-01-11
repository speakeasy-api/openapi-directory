import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2UnwrappedCryptoKey:
    r"""GooglePrivacyDlpV2UnwrappedCryptoKey
    Using raw keys is prone to security risks due to accidentally leaking the key. Choose another type of key if possible.
    """
    
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    
