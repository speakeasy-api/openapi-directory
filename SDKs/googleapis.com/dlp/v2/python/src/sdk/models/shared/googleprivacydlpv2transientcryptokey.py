import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2TransientCryptoKey:
    r"""GooglePrivacyDlpV2TransientCryptoKey
    Use this to have a random data crypto key generated. It will be discarded after the request finishes.
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
