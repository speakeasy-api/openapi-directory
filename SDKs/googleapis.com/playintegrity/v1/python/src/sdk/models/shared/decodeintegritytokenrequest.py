import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DecodeIntegrityTokenRequest:
    r"""DecodeIntegrityTokenRequest
    Request to decode the integrity token.
    """
    
    integrity_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrityToken') }})
    
