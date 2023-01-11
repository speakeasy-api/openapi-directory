import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class WebAuthn:
    r"""WebAuthn
    Security key information specific to the Web Authentication protocol.
    """
    
    rp_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rpId') }})
    
