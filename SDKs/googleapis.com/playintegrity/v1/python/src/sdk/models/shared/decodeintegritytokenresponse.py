import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tokenpayloadexternal as shared_tokenpayloadexternal


@dataclass_json
@dataclasses.dataclass
class DecodeIntegrityTokenResponse:
    r"""DecodeIntegrityTokenResponse
    Response containing the decoded integrity payload.
    """
    
    token_payload_external: Optional[shared_tokenpayloadexternal.TokenPayloadExternal] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokenPayloadExternal') }})
    
